/**
 * This page displays all modules
 */
import useSWR from "swr";
import ModuleItem from "@/components/modules/ModuleItem";
import Link from "next/link";
import Layout from "@/components/Layout";
import { getUserByOpenID } from '@/scripts/getUserByOpenID';
import gqlFetcher from '@/utils/gqlFetcher';
import { useContext } from "react";
import AuthenticationContext from "@/contexts/AuthenticationContext";

const AllModules = () => {
  const { jwt: token, user } = useContext(AuthenticationContext);
  const { data, error } = useSWR(
    {
      query: getUserByOpenID(user?.sub),
      token,
    },
    gqlFetcher
  );
    
  if(error) return <p>Failed to load content...</p>
  if(!data) return <p>Loading...</p>

  console.log(data);

  return (
      <div className="p-5">
          <Link href="/modules" passHref>
              <a className="p-2 bg-blue-500 text-white rounded">
                  Back to Enrolled Modules
              </a>
          </Link>
          <hr className="mt-4 mb-4" />
          <h1 className="text-4xl mb-2 font-bold">All Available Modules</h1>
          <p className="text-gray-600 text-light mb-4">A list of all the modules currently available</p>
          <div className="grid gap-3">
              { data.user.plan.modules.map((enrollment) => {
                  return <ModuleItem role={enrollment.role} key={enrollment.module.id} data={enrollment.module} />;
              }) }
          </div>
      </div>
  );
}

AllModules.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>
}

export default AllModules;