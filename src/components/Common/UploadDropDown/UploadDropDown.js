import React, { useState } from 'react'
import './UploadDropDown.css'
import downArrow from '../../../asserts/down-arrow.png'

const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" }
];

function UploadDropDown({ dropDownStyle, optionStyle }) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ label: "Option 1", value: "option1" });

    return (
        // <div className="headSec">
        <div className="drop-down" onClick={() => setIsOpen(!isOpen)}>
            <div className="selected">
                <span>Upload media</span>
                <img src={downArrow} width='12px' height='7px' />
            </div>
            {isOpen && <div className="options" style={optionStyle ? optionStyle : {}}>
                <ul className='option-ul'>
                    {options.map(option => <li onClick={() => setSelectedOption(option)}>{option.label}</li>)}
                </ul>
            </div>}
        </div>
        //   </div>

    )
}

export default UploadDropDown