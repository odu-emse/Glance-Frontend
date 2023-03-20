import { useState } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Chips from 'react-chips';

export const ModuleRequirement = ({ requirements }: ModuleRequirementProps) => {
  console.log('pre-req', requirements)

  const [searchWord, setsearchWord] = useState('');
  console.log(searchWord)

  const [selectedPreReqs, setSelectedPreReqs] = useState([]);


  function handleSelect(val) {
    console.log(val)
    setSelectedPreReqs([...selectedPreReqs, val])
  }

  function handleChips(chips) {
    console.log({ chips })
    setSelectedPreReqs(chips)
  }

  console.log({ selectedPreReqs })
  return (
    <div>
{/* <input
          type="search"
          className="block min-h-[auto] w-1/2 rounded border border-gray-200 bg-gray-200"
          id="searchRequirements"
          placeholder="Search"
          onChange={e => {
            setsearchWord(e.target.value)
          }}
          value={searchWord}
        /> */}
      <Chips
        onChange={handleChips}
        value={selectedPreReqs}
        placeholder="Search"
        suggestions={requirements.filter(req => {
          return req?.toLowerCase().includes(searchWord.toLowerCase())
        }).map(disReq => disReq)}

        alwaysRenderSuggestions={true}
        focusInputOnSuggestionClick={false}
        >
      </Chips>
      {/* <ul>
        {requirements.filter(req => {
          return req?.toLowerCase().includes(searchWord.toLowerCase())
        }).map(disReq => <li><a onClick={() => handleSelect(disReq)}>{disReq}</a></li>)}
      </ul> */}

    </div>
  )


}

export type ModuleRequirementProps = {
  requirements: Array<any>
}
