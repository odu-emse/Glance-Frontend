import gqlFetcher from "@/utils/gqlFetcher";
import { useRouter } from "next/router";
import useSWR from "swr";

const Redirect = () => {

    const router = useRouter();

    if (typeof window !== "undefined") {
        const { data, error } = useSWR(
            {
                query: `
                    mutation{
                        login(code: "${router.query.code}"){
                            id
                        }
                    } 
                `
            },
            gqlFetcher
        )
        console.log(error)
        if(error) return <p>Error</p>
        if(!data) return <p>Loading...</p>;
        window.localStorage.setItem("auth", data.login.id_token)

        router.push("/")
    }

    return <p>Loading...</p>;
}

export default Redirect;