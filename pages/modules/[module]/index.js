import { useRouter } from "next/router";

const Module = () => {

    const router = useRouter();
    const { moduleId } = router.query;

    return (
        <div>
            <div className="mx-auto max-w-7xl py-4 px-4 w-3/4 sm:w-full xl:w-2/3">
                <div className="flex xl:flex-row flex-col-reverse">
                    <div className="xl:w-2/3 w-full sm:mb-4 sm:mr-0 lg:mb-0 lg:mr-5">
                        <h1 className="text-3xl font-bold mb-2">
                            Module {module.moduleNumber} | {module.moduleName}
                        </h1>
                        <p className="mb-2">{module.intro}</p>
                        <div className="w-full xl:w-1/2">
                            <p className="font-light text-yellow-500 flex items-center">
                                <span className="pr-2">
                                    100%
                                </span>
                                {/* <StarRatingComponent
                                    name="module-rating"
                                    starCount={5}
                                    editing={false}
                                    value={calculateRating(module.feedback)}
                                />*/}
                                <span className="pl-2 text-gray-400">
                                    {/*({module.feedback.length} ratings)*/}
                                </span>
                                {/*TODO: we need to get member list to calculate this*/}
                                {/* <span className="pl-2 text-gray-400">
                                    {pluralize(
                                        'student',
                                        module.enrolled.length,
                                        true
                                    )}
                                </span> */}
                            </p>
                        </div>
                        <p className="mb-4">
                            Instructed by{' '}
                            <a className="underline" href="./">
                                {module.instructor}
                            </a>
                        </p>
                        <div className="border shadow-md rounded-sm py-3 px-4 bg-gray-50 border-gray-50">
                            <h3 className="text-lg font-bold">
                                Module objectives
                            </h3>
                            {/*{module.keywords.map((key, index) => (
                                <div
                                    className="flex flex-row items-center mb-2"
                                    key={index}
                                >
                                    <span className="mr-3 text-gray-400">
                                        <Check />
                                    </span>
                                    <p className="mb-0 capitalize">{key}</p>
                                </div>
                            ))}*/}
                        </div>
                        <div className="border shadow-md rounded-sm py-3 px-4 mt-3 bg-gray-50 border-gray-50">
                            <h3 className="text-lg font-bold">
                                Module description
                            </h3>
                            <p>{module.description}</p>
                        </div>
                        <div className="border shadow-md rounded-sm py-3 px-4 mt-3 bg-gray-50 border-gray-50">
                            <h3 className="text-lg font-bold">Requirements</h3>
                            <p>{module.description}</p>
                        </div>
                    </div>
                    <div className="xl:w-1/3 w-full xl:border border-gray-50 px-3 py-4 rounded-sm xl:shadow-md">
                        {/*TODO: we need to get content delivery working to get this fixed */}
                        {/* <img
                            src={`${content.href}/story_content/thumbnail.jpg`}
                            alt={`${module.moduleName} module thumbnail`}
                            className="w-full"
                        /> */}
                        <div className="module--housing--inclusion">
                            <h5 className="mt-3 text-lg font-bold">
                                This module includes:{' '}
                            </h5>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <Youtube /> */}
                                </div>
                                {module.duration} hours on demand video
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <Book /> */}
                                </div>
                                {module.numSlides} interactive slides
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <Download /> */}
                                </div>
                                Downloadable resources
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <Smartphone /> */}
                                </div>
                                Available on mobile devices
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <Repeat /> */}
                                </div>
                                Lifetime access
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                    {/* <LifeBuoy /> */}
                                </div>
                                On-demand helping professionals
                            </span>
                            <span className="flex mt-3 font-light items-center">
                                <div className="text-gray-400 mr-3">
                                   {/*} <Award /> */}
                                </div>
                                Certificate of completion
                            </span>
                        </div>
                        <div className="d-flex flex-column my-3">
                            <button
                                onClick={(e) => {
                                    addModule(module._id)
                                }}
                                className="bg-blue-400 rounded text-white py-2 px-4 w-full"
                            >
                                Enroll module
                            </button>
                            <button className="border-2 border-blue-300 rounded py-2 px-4 w-full mt-3">
                                Favorite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Module;