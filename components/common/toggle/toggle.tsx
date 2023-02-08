import React, { useState } from 'react'

export const ToggleSwitch: React.FC<ToggleProps> = ({
  identifier,
  label,
  variant = 'primary',
  checked = false,
  size = 'base',
  disabled,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked)
  const handleToggleSwitch = (event) => {
    setIsChecked(event.target.checked)
    onChange(event.target.checked)
  }

  const switchSize = size === 'small' ? 'w-5 h-5' : size === 'large' ? 'w-8 h-8' : 'w-6 h-6'

  return (
    <label className={`toggle-switch relative inline-block items-center mb-5 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleToggleSwitch} disabled={disabled} />
      <span className={`toggle-switch-slider bg-gray-300 rounded-full p-1 flex items-center ${switchSize}`} style={{ backgroundColor: isChecked ? '#48bb78' : '#e2e8f0' }}>
        <span className={`toggle-switch-handle bg-white rounded-full shadow-md ${switchSize}`} style={{ transform: isChecked ? 'translateX(100%)' : 'translateX(0%)' }}></span>
      </span>
      {label && <span className="ml-3 text-gray-700">{label}</span>}
      <style jsx>{`
        .toggle-switch {
          .toggle-switch-slider {
            transition: all 0.2s ease-in-out;
          }

          .toggle-switch-handle {
            transition: all 0.2s ease-in-out;
          }
        }
      `}</style>
    </label>
  )
}



export type ToggleProps = {
	identifier?: string
	label?: string
	variant?: 'primary' | 'secondary'
	checked?: boolean
	size?: 'small' | 'base' | 'large'
	disabled?: boolean
	onChange: (checked: boolean) => void
}