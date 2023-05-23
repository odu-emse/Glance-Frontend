import * as React from 'react'


export const TimePickerInput: React.FC<TimePickerInputProps> = (): React.ReactElement => 
{
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');

    const handleHoursChange = (e) => {
        setHours(e.target.value)
    }

    const handleMinutesChange = (e) => {
        setMinutes(e.target.value)
    }

  return (
      <div className="flex items-center">
        <label htmlFor="hours" className="mr-5">
          Time Limit
        </label>
        <input
          id="minutes"
          placeholder="00"
          type="number"
          min="0"
          max="600"
          className="p-1 border border-gray-300 rounded"
          value={minutes}
          onChange={handleMinutesChange}
        /> 
        <span className='mx-1'>minutes</span>
        </div>
  )
}

type TimePickerInputProps = {
	
}


