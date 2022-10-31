import * as React from "react";
import { Input } from "../FormElements";
import type { InputProps } from "../FormElements";
import { SocialCard } from "../SocialCard";
import type { SocialCardProps, UserAccountProps } from "../SocialCard";
import {
  AiOutlineDown,
  AiOutlineEnter,
  AiOutlineTrophy,
  AiFillPlusSquare,
} from "react-icons/ai";
import {
  BiSearch,
  BiMessageRoundedDetail,
  BiPoll,
  BiMailSend,
} from "react-icons/bi";
import { RiContactsBookLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { CgPoll } from "react-icons/cg";
import { GoLinkExternal } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
export const CommunityPage = ({
  socialCardProps,
  userAccountProps,
  inputProps,
  groupsProps,
  pollSurveysProps,
  challengesProps,
  contactProps,
}: CommunityPageProps): JSX.Element => {
  return (
    <div className="h-auto mx-auto relative bg-[#E7E8E9] overflow-hidden">
      <div className="flex flex-1">
        <div className="container mt-2 md:ml-10 relative md:w-7/12">
          <div className="flex flex-col h-screen">
            <div className="text-center md:text-left text-gray-400 text-6xl tracking-widest border">
              Feed
            </div>
            <div className="hidden md:relative md:flex md:my-4">
              <textarea
                className="w-full placeholder:italic rounded border-box shadow-md "
                placeholder="Go ahead, share your moments!"
              ></textarea>
              <button className="items-end">
                <AiOutlineEnter size={30} />
              </button>
            </div>
            <button>
              <div className="flex justify-end text-gray-400 items-center text-xs tracking-tight">
                Sort by Relevance <AiOutlineDown />
              </div>
            </button>
            <div>
              <SocialCard
                timestamp={socialCardProps.timestamp}
                content={socialCardProps.content}
                likes={socialCardProps.likes}
                comments={socialCardProps.comments}
                user={userAccountProps}
              ></SocialCard>
            </div>
            <div className="md:hidden flex flex-row h-full items-end justify-evenly w-full">
              <div className="">
                <button>
                  <GrGroup size={30} />
                </button>
              </div>
              <div className="">
                <button>
                  <CgPoll size={30} />
                </button>
              </div>
              <div className="">
                <button>
                  <BiMessageRoundedDetail size={30} />
                </button>
              </div>
              <div className="">
                <button>
                  <BiSearch size={30} />
                </button>
              </div>
              <div className="">
                <button>
                  <AiOutlineTrophy size={30} />
                </button>
              </div>

              <div className="">
                <button>
                  <RiContactsBookLine size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:container md:ml-36 md:relative md:w-11/12 bg-white shadow-lg h-screen overflow-y-auto">
          <div className="flex flex-col h-full w-full ">
            <div className="h-20 flex shrink-0 w-full items-center justify-center border-b border-gray-150">
              <Input
                defaultValue={inputProps.defaultValue}
                label={inputProps.label}
                name={inputProps.name}
                onChange={() => {
                  inputProps.onChange;
                }}
                role={inputProps.role}
                type={inputProps.type}
              ></Input>
            </div>
            <div className="mx-4">
              <p className="text-[#535c69] font-semibold ">Groups</p>
              <div className="flex flex-col">
                <ul className="text-xs ">
                  {groupsProps
                    ? groupsProps.map((group, groupIndex) => (
                        <li
                          className="pb-1/2 flex flex-row gap-x-4 items-center"
                          key={groupIndex}
                        >
                          <img
                            className="w-12 h-12 rounded-full p-1"
                            src={group.groupsProfileImage}
                          />
                          <div className="flex-grow">
                            <p className="">{group.groupsName}</p>
                            <p className="text-gray-400">
                              {group.groupsMemberCount.toLocaleString() +
                                ` members`}
                            </p>
                          </div>
                          <button>
                            <AiFillPlusSquare size={30} />
                          </button>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
            <div className="mt-2 border-t border-gray-150">
              <div className="mx-4">
                <p className="text-[#535c69] font-semibold mb-2">
                  Polls & Surveys
                </p>
                <div className="flex flex-col">
                  <ul className="text-xs">
                    {pollSurveysProps
                      ? pollSurveysProps.map((poll, pollIndex) => (
                          <li
                            className="pb-2 flex flex-row gap-x-4 items-center"
                            key={pollIndex}
                          >
                            <div className="flex-grow">
                              <p className="">{poll.pollSurveyName}</p>
                              <p className="text-gray-400">
                                {`Takes about ` + poll.timestamp + ` `}
                                {poll.timestamp === 1 ? "minute" : "minutes"}
                              </p>
                            </div>
                            <button>
                              {poll.pollSurveyName.endsWith("poll") ? (
                                <BiPoll size={30} />
                              ) : (
                                <GoLinkExternal size={30} />
                              )}
                            </button>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-150">
              <div className="mx-4">
                <p className="text-[#535c69] font-semibold mb-2">
                  Popular challenges
                </p>
                <div className="flex flex-col">
                  <ul className="text-xs">
                    {challengesProps
                      ? challengesProps.map((challenge, challengeIndex) => (
                          <li
                            className="pb-2 flex flex-row gap-x-4 items-center"
                            key={challengeIndex}
                          >
                            <div className="flex-grow">
                              <p className="">{challenge.challengesName}</p>
                              <p className="text-gray-400">
                                {`Added by ` +
                                  challenge.challengesUserCount.toLocaleString() +
                                  ` `}
                                {challenge.challengesUserCount === 1
                                  ? "user"
                                  : "users"}
                              </p>
                            </div>
                            <button>
                              <AiOutlinePlus size={30} />
                            </button>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-150">
              <div className="mx-4">
                <p className="text-[#535c69] font-semibold mb-2">
                  Most Recent Chats
                </p>
                <div className="flex flex-col">
                  <ul className="">
                    {contactProps
                      ? contactProps.map((contact, contactIndex) => (
                          <li
                            className="pb-2 flex flex-row gap-x-6 items-center"
                            key={contactIndex}
                          >
                            <div className="relative">
                              <img
                                className="w-12 h-12 rounded-full p-1"
                                src={contact.contactProfileImage}
                              />
                              <span
                                className={`bottom-0 left-8 absolute w-3.5 h-3.5 border-2 border-white rounded-full 
                                ${
                                  contact.contactStatus === "Online"
                                    ? "bg-green-400"
                                    : contact.contactStatus === "Busy"
                                    ? "bg-red-500"
                                    : "bg-gray-500"
                                }
                              `}
                              ></span>
                            </div>

                            <div className="flex-grow">
                              <p className="font-light">
                                {contact.contactTitle === undefined
                                  ? ""
                                  : contact.contactTitle + ` `}
                                {contact.contactFirstName +
                                  ` ` +
                                  contact.contactLastName}
                              </p>
                            </div>
                            <button>
                              <BiMailSend size={30} />
                            </button>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type CommunityPageProps = {
  socialCardProps: SocialCardProps;
  userAccountProps: UserAccountProps;
  inputProps: InputProps;
  groupsProps: GroupsProps[];
  pollSurveysProps: PollSurveysProps[];
  contactProps: ContactProps[];
  challengesProps: ChallengesProps[];
};

export type GroupsProps = {
  groupsProfileImage: string;
  groupsName: string;
  groupsMemberCount: number;
};

export type ChallengesProps = {
  challengesName: string;
  challengesUserCount: number;
};

export type PollSurveysProps = {
  pollSurveyName: string;
  timestamp: number;
};

export type ContactProps = {
  contactTitle?: string;
  contactFirstName: string;
  contactLastName: string;
  contactProfileImage: string;
  contactStatus: string;
};
