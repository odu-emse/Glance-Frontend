/**
 * This page displays all modules
 */
import ModuleItem from "@/components/modules/ModuleItem";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

const AllModules = () => {

    const [ data, setData ] = useState(null);
	const [ isLoading, setLoading ] = useState(true);

    useEffect(() => {
        fetch(`/api/modules`)
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			}).catch((error => {
				setLoading(false);
			}));
    }, []);

    if (isLoading) return <p>Loading...</p>
	if (!data) return <p>Content failed to load.</p>

    let mods = []
    for (const mod in data) {
        const o = data[mod];
        mods.push(<ModuleItem data={o} key={o.id} />)
    }

    console.log(mods)

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