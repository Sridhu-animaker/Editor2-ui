import React, { useState } from 'react'
import './VideoThumbnail.css'
import upload from '../../asserts/upload.png'

function VideoThumbnailComponent() {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='videoSec'>
            <div className='videoPreview'>
                <div className='preview' style={{ position: 'relative' }}>
                    <img src='https://static.animaker.com/animaker/scene-prebuilts/thumbnails/1027.png' className={`thumbnail-img ${isChecked && 'checked-border'}`} />
                    <div className='checkbox-container'>
                        <input type='checkbox' className='checkbox-hidden' value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                        <div className='checkbox-custom'>
                            <svg className='checbox-svg' viewBox='0 0 24 24'><polyline points='20 6 9 17 4 12'></polyline></svg>
                        </div>
                    </div>
                </div>
                <span>Default</span>
            </div>

            <div className='videoPreview'>
                <div className='preview' style={{ position: 'relative' }}>
                    <div className='dragDrop'>
                        <img src={upload} alt='drag and drop' className='upload-img' />
                    </div>
                </div>
                <span>Default <small>1280x720 px</small></span>
            </div>
        </div>
    )
}

export default VideoThumbnailComponent