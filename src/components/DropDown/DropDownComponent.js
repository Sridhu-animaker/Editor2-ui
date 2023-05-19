import React, { useState } from 'react'
import './DropDown.css'
import downArrow from '../../asserts/down-arrow.png'

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" }
];

function DropDownComponent() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ label: "Option 1", value: "option1" });

  return (<>
    {/* <span className='float-right'>
      <select className='resolution-select'>
        <img src={downArrow} />
        <option>720p HD</option>
        <option>480p HD</option>
        <option>1080p HD</option>
        <option>2160p HD</option>
      </select>
    </span> */}
    <div className="headSec">
      <div className="drop-down" onClick={()=>setIsOpen(!isOpen)}>
        <div className="selected">
          <a href="#"><span>{selectedOption.label}</span></a>
          <img src={downArrow} className={'arrow'}width='12px' height='7px' />
        </div>
        {isOpen && <div className="options">
          <ul>
            {options.map(option=><li onClick={()=>setSelectedOption(option)}><a href="#">{option.label}</a></li>)}
          </ul>
        </div>}
      </div>
    </div></>
  )
}

export default DropDownComponent