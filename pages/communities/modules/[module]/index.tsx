import {Thread, Input} from 'emse-ui'

const Module = () => {
    const userName="joeldesante"
    const userEmail="jdsante@odu.edu"
    const moduleName ="This is the name of the module"
    return (
        <div className='m-8 flex'>
            <div className='m-10 grow'>
                <p className="text-3xl font-semibold">{moduleName}</p>
                <div className="flex my-2 items-center">
                    <img
                        src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
                        alt="profile image"
                        className="shadow-lg rounded-full max-w-full h-4 align-middle border-none"
                    />
                    <small className="pl-2 font-bold">{userName}</small>
                    <small ><span className='px-1 font-bold'>&bull;</span>{userEmail}</small>
                </div>
                <div className="flex items-center">
                    <h1 className="text-lg font-semibold flex-none pr-20">Recent Threads</h1>
                    <Input 
                        className="grow"
                        defaultValue=""
                        label="Search"
                        name="floating_search"
                        onChange={function noRefCheck(){}}
                        role="search"
                        type="search"
                        
                    /> 
                </div>
                <div className="m-3">
                    <div className="my-4">
                <Thread
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas."
                    id="12345"
                    title="How did the United States land on the moon?"
                    upvotes={10}
                    userProfile={{
                        firstName: 'joel',
                        id: 1,
                        image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
                        lastName: 'desante'
                    }}
                    />        
                    </div>
                <Thread
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat diam vitae nibh mollis, dignissim mollis augue porttitor. Aliquam viverra auctor semper. Vestibulum placerat luctus tortor eu iaculis. Fusce a ullamcorper sapien. Phasellus at sollicitudin mauris. Duis suscipit, libero at consectetur vestibulum, leo lectus tristique mauris, convallis gravida est elit eu nibh. Mauris efficitur ultrices tincidunt. Nam sed tincidunt velit. Suspendisse gravida porta mi a egestas."
                id="12345"
                title="How did the United States land on the moon?"
                upvotes={10}
                userProfile={{
                    firstName: 'joel',
                    id: 1,
                    image: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
                    lastName: 'desante'
                }}
                />                 
                </div>
            </div>
            <aside className="mx-10 flex-none">
            <p className='text-xl font bold'>Active Modules component</p>
            <p className='text-xl font bold'>Watched Threads component</p>
            </aside>

            
        </div>
    )
}
  
export default Module;