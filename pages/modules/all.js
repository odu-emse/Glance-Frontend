/**
 * This page displays all modules
 */
import useSWR from "swr";
import ModuleItem from "@/components/modules/ModuleItem";
import Link from "next/link";
import Layout from "@/components/Layout";
import fetcher from "@/utils/fetcher";

const AllModules = () => {
	
    const { data, error } = useSWR('/api/modules', fetcher);
    
    if(error) return <p>Failed to load content...</p>
    if(!data) return <p>Loading...</p>

    let mods = []
    for (const mod in data) {
        const o = data[mod];
        mods.push(<ModuleItem data={o} key={o.id} />)
    }

    return (
        <div className="p-5">
            <Link href="/modules">
                <button className="p-2 bg-blue-500 text-white rounded">
                    Back to Enrolled Modules
                </button>
            </Link>
            <hr className="mt-4 mb-4" />
            <h1 className="text-4xl mb-2 font-bold">All Available Modules</h1>
            <p className="text-gray-600 text-light mb-4">A list of all the modules currently available</p>
            <div className="grid gap-3">
                { mods }
            </div>
        </div>
    );
}

AllModules.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default AllModules;