import * as React from 'react'
import * as PropTypes from 'prop-types';



export const Assignment = ({questionCount, moduleIdentifier, moduleName} : AssignmentProps): JSX.Element => {
    return (
        <div className='border-solid border-gray border'>
                <div>

                    <p className='mx-3 my-3 text-gray-300 inline-block text-xs'>{questionCount} questions</p>
                    <p className='mx-3 my-3 pl-6 text-gray-500 inline-block text-xs'>{moduleIdentifier}</p>

                </div>
                <div>
                    <p className='mx-3 my-3'>{moduleName}</p>
                </div>
        </div>
    );
  
}
// define the property type
// i.g.
// size: ProTypes.oneOf(['small','medium','large'])
Assignment.propTypes = {
    questionCount: PropTypes.number.isRequired,
    moduleIdentifier: PropTypes.string.isRequired, 
    moduleName: PropTypes.string.isRequired
}


Assignment.defaultProps = {
    questionCount: 13,
    moduleIdentifier: "ENMA 601",
    moduleName: "Analysis of Orgnaizational Systems - Exam2",
};

type AssignmentProps = {
    questionCount: number,
    moduleIdentifier: string,
    moduleName: string
}