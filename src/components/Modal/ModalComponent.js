import React from 'react'
import './Modal.css'

function ModalComponent({ title }) {
    return (
        <div className='file-modal' >
            <div className='file-container h-line'>
                <div className='title'>{title}</div>
                <span className='small'>800px X 450px</span>
            </div>
            <ul>
                <li style={{ backgroundColor: '#F2F3F7' }}>Dashboard</li>
                <li>Create a new video</li>
            </ul>
            <ul>
                <li>Make a copy</li>
                <li>Manage Export</li>
                <li>Keyboard shortcut</li>
                <li>Version history</li>
            </ul>
            <ul>
                <li>Help</li>
            </ul>
            <div className='file-container d-flex'>
                <img className='profile-pic' src='https://lh3.googleusercontent.com/ogw/AOLn63FHm1OdISBcijZa8fZdd7uSUdz27xEoCkqj2ZAI=s64-c-mo' />
                <div className='acc-details'>
                    <div className='name'>Sridhu Sekar</div>
                    <div className='plan'>Pro</div>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent