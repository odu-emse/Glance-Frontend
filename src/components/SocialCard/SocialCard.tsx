import { HttpRequestInterceptor, HttpResponseInterceptor } from 'cypress/types/net-stubbing';
import * as React from 'react'
import { AiOutlineCheckCircle, AiFillCheckCircle } from 'react-icons/ai'
import * as PropTypes from 'prop-types'

export const SocialCard = ({

  name,
  timestamp,
  branch,
  content,
  likes,
  comments,
  profile,
  clicked,
  role
}: SocialCardProps) => {
  const [isClicked, setIsClicked] = React.useState(clicked ?? false)
  role = name.split(".")[0]

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white w-full">
        <div className="flex w-full items-center justify-between  pb-3">
          <div className="flex items-center space-x-3">
            <div className="flex flex-wrap justify-center">
              <div className="w-56 rounded-full shadow" >

             


                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" 
                alt="..." 
                className="shadow-lg rounded-full max-w-full h-12 align-middle border-none"
                onClick={() => setIsClicked(!isClicked)}/>
                { isClicked &&
           
                  <div className="absolute  left-10 bottom-10  z-20 w-56 py-0 px-0 mt-0 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
                  <a href="#" className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                 view profile
                  </a>
               
           <a href="#" className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                 Send message
                </a>
                   
                  <a href="#" className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Unfriend
                  </a>
                  <a href="#" className="block px-4 py-3 text-xs text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                  Block user
                </a>
                </div>
                   
                   
                              
      
                   }
                
              </div>
            </div>

            <div className="mt-4 mb-6">
              <div className=" mb-3 text-lg font-bold text-slate-700">{name}</div>
              <div className="text-xs text-neutral-500">{timestamp} | {branch}</div>
            </div>

          </div>
         
          <div className=" px-10 ">
            
             
            {role=== "Prof" &&
              
 <svg className="inline-block h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
  </path>
  </svg>}
 
{role=== "Advisor" &&
              
              <svg className="inline-block h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
  <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />               
               </svg>}
               
  {role=== "TA" &&
              
              <svg className="inline-block h-8 w-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z">
               </path>
               </svg>}
              
               
             

            </div>
          </div>
       
       

        <div className="mt-4 mb-6 w-200 h-200">
          <div className="text-sm text-neutral-600 ">
            {content}
          </div>
        </div>
        <div className="border-b p-2">
          <div className="flex items-center justify-between text-slate-500 ">
            <div className="flex space-x-4 md:space-x-8">
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5 text-blue-500  " fill="currentColor" viewBox="0 0 24 24" >

                  <path stroke-linecap="round" stroke-linejoin="round" 
                  d=
                  "M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                <span className="text-blue-500">{likes} Likes</span>
              </div>
              <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-1.5 h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>

                <span className="text-blue-500">{comments} comments</span>
               

              </div>


            </div>


          </div>

        </div>
        <div className="flex appearance-none border-1 p-1 left-0 m-2 sm:max-w-screen-sm text-stone-900 w-full">
          <input type="text" className="appearance-none border-transparent bg-transparent px-5 py-2 w-full" placeholder="Add Comment..."></input>
          <button className="flex items-center justify-center px-5">
            <svg className="w-6 h-6 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"></path>
            </svg>
          </button>
          <button className="flex items-center justify-center px-8 ">
            <svg className="w-6 h-6 " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>


  );
}

type SocialCardProps = {



  name: string
  timestamp: string
  branch: string
  content: string
  likes: Int16Array
  comments: Int16Array
  profile: URL
  clicked?: boolean
  role: string
}

// LessonLink.defaultProps ={
//     url : "../components",
//     checked : false, 
//     label: "Introduction"
// }