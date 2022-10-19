import * as React from "react";

export const ModuleCard = ({
  module,
  completion,
}: ModuleProps): JSX.Element => {
  return (
    <div className="border-gray flex h-50 md:h-48 w-screen flex-wrap border border-solid">
      <div
        className={`flex flex-col p-2 w-screen h-1 md:h-full md:w-4 mr-4 ${
          completion
            ? `bg-green-400`
            : module.percentage > 25
            ? `bg-blue-300`
            : `bg-red-400`
        }`}
      >
        <div className="flex mt-4 flex-col md:flex-row md:items-start md:justify-start items-center justify-center">
          <div className="md:flex md:flex-col md:w-full">
            <p className="flex md:ml-10 md:pb-4 text-gray-300 md:pl-2 md:text-sm items-center justify-center">{`${module.courseName} M ${module.moduleIdentifiers}`}</p>
            <p className="flex md:ml-10 md:pb-4 font-bold pl-2 text-lg">
              {module.moduleName}
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center md:items-start md:justify-start">
            <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-start">
              <p className="md:mt-5 md:ml-10">{module.percentage + `%`}</p>
              <p className="md:mt-5 md:ml-1">Viewed</p>
              {completion ? (
                <div className="flex flex-col items-center justify-center ">
                  <p className="md:mx-16 md:mt-2 md:w-48">
                    {`Average time: ${module.averageTime} ${
                      module.averageTime === 1 ? `minute` : `minutes`
                    }`}
                  </p>
                  <p>{`Your time: ${module.userTime} ${
                    module.userTime === 1 ? `minute` : `minutes`
                  }`}</p>
                </div>
              ) : (
                <p className="md:mx-16 md:mt-2">
                  {`Approximately ${module.duration} ${
                    module.duration === 1 ? `minute` : `minutes`
                  } left `}
                </p>
              )}
              {completion ? (
                <div className="flex items-center justify-center">
                  <p className="md:"></p>
                  <p className="text-white bg-blue-300 px-20  py-1 w-full my-1">
                    Continue
                  </p>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row w-full h-50 items-center justify-center gap-3 md:items-start md:justify-start">
                  <p className="mt-2 flex h-2 w-96 bg-gray-300 md:ml-5 md:h-32 md:w-3 "></p>

                  <p className="text-gray-400 text-sm">Current Topic</p>
                  <p className="font-medium text-sm">{module.currentTopic}</p>
                  <p className="text-white bg-blue-300 px-20 py-1 w-24">
                    <span className="flex items-center justify-center">
                      {module.returnIdPage}
                    </span>
                  </p>
                  {/* Link to returnIdPage */}
                  <p className="text-white bg-orange-400 px-20 py-1 w-24 mb-2">
                    <span className="flex items-center justify-center">
                      {module.treeView}
                    </span>
                  </p>
                  {/* Link to treeView */}
                </div>
              )}

              <p className="underline underline-offset-2 inline-block text-sm text-gray-400">
                <span className="md:pl-4 md:pr-8 border-black md:border-r-4">
                  Forum
                </span>
              </p>
              <p className="underline underline-offset-2 inline-block text-sm text-gray-400">
                <span className="md:pl-8 md:pr-8 border-black md:border-r-4">
                  Assignment
                </span>
              </p>
              <p className="underline underline-offset-2 inline-block text-sm text-gray-400">
                <span className="md:pl-8 md:pr-8 border-black md:border-r-4">
                  Download
                </span>
              </p>
              {completion ? (
                ``
              ) : (
                <p className="underline underline-offset-2 inline-block text-sm text-red-500">
                  <span className="md:pl-8 md:pr-8 underline-offset-8">
                    Abandon
                  </span>
                </p>
              )}
            </div>

            <svg className="md:mx-10 w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className="text-blue-600"
                strokeWidth="5"
                strokeDasharray="10"
                strokeDashoffset={`${100 - (module.percentage / 100) * 10}`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
type ModuleObject = {
  courseName: string;
  moduleIdentifiers: string;
  moduleName: string;
  percentage: number;
  duration?: number;
  averageTime?: number;
  userTime?: number;
  currentTopic?: string;
  returnIdPage: string;
  treeView?: string;
};

export type ModuleProps = {
  module: ModuleObject;
  completion: boolean;
};
