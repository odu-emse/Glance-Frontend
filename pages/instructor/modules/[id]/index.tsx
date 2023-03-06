import React from 'react'
import {
    BsFillExclamationOctagonFill,
    BsFillClockFill,
    BsFillBellFill,
} from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import useSWR from 'swr'
import { gql, usemutation } from 'graphql-request'
import { useRouter } from 'next/router'
import gqlFetcher from '@/utils/gql_fetcher'
import {mutate} from 'swr'

const useModuleMutation = () => {
    const { data, error } = useSWR(
        {
            mutation: gql`
           {
             deleteModule(id:"63f50d6ba6769f5d9f86cb51"){
               id
               title
             }
           }
             `,

        },
        gqlFetcher
    )
    return [data, error]
  };

const runMutation = (moduleID) => {
    mutate(async () => {
        fetch('http://localhost:4000/graphql', {
            method: "POST",
            body: JSON.stringify({
                query: gql`
                    mutation DeleteModule($input: ID!){
                        deleteModule(id: $input ){
                            id
                        }
                    }
                `,
                variables: {
                    input: moduleID
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }, false)
}

export default function index() {
    /*constant that holds the state of onClick of MdClose icon*/
    const [isClicked, setIsClicked] = React.useState(false);
    return (
        <div className={`
      ${isClicked == true ? ' invisible ...' : ' '}`}>

            <div className="border-solid border-gray rounded shadow-lg border flex justify-between w-2/5">
                <div
                    className="flex justify-start items-center px-2"
                    id="Default"
                >

                    <div className="modueleInformation px-2">
                        <p className="mx-2 my-2 text-l">Module</p>
                        <p className="mx-2 my-2 text-gray-400 inline-block text-xs">
                            hiiii
                        </p>
                    </div>
                </div>
                <div className="closeIcons flex gap-2 justify-items-end my-10 mx-2">

                    <MdClose fill="gray" size={30} onClick={() => {
                        setIsClicked(!isClicked);
                        // console.log(data);
                        runMutation("63f50d6ba6769f5d9f86cb51")
                        // mutate({ data });
                        // handleHook();
                    }} />
                </div>


            </div>
        </div>

    )
}