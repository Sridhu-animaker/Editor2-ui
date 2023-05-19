import React, { useState } from 'react';
import './Property.css'
import property from '../../asserts/property.png'
import propertySelect from '../../asserts/property-selected.png'
import uploadImg from '../../asserts/upload-img.png'
import subtitle from '../../asserts/subtitle.png'
import leftArrow from '../../asserts/left-arrow.png'

function PropertyComponent() {
    const [isExpand, setIsExpand] = useState(false);
    const [volume, setVolume] = useState(0)

    const toggleMenu = () => {
        setIsExpand(!isExpand);
    }
    return (
        <div className="ourterLayout properties">
            <div>
                <div className="topSec bottomActive">
                    <div className={`leftSec ${isExpand ? 'expand' : ''}`}>
                        <div className="menu">
                            <ul>
                                <li onClick={toggleMenu}>
                                    <img src={property} alt="Properties" width="22px" height="22px" />
                                    <small>Properties</small>
                                </li>
                                <li onClick={toggleMenu}>
                                    <img src={uploadImg} alt="Uploads" width="22px" height="22px" />
                                    <small>Uploads</small>
                                </li>
                                <li onClick={toggleMenu}>
                                    <img src={subtitle} alt="Subtitle" width="22px" height="22px" />
                                    <small>Subtitle</small>
                                </li>
                            </ul>
                        </div>
                        <div className={`toggleSec ${isExpand ? 'active' : ''}`}>
                            <div className="toggleSecIn propertiesIn">
                                <div className="myFiles d-inline-block w-fill">
                                    <span className="float-left">Audio</span>
                                </div>
                                <div className="rangSlider">
                                    <span>Volume</span>
                                    <input type="text" value={volume} />
                                    <input type="range" min="0" max="100" onChange={(e) => { setVolume(e.target.value) }} value={volume} />
                                </div>
                                <div className="section d-inline-block w-fill">
                                    <div className="float-left">
                                        <div className="checkbox-container" style={{ position: 'relative' }}>
                                            <input type="checkbox" className="checkbox-hidden" />
                                            <div className="checkbox-custom">
                                                <svg className="checbox-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                            <span>Mute</span>
                                        </div>
                                    </div>
                                    <div className="float-right">
                                        <p style={{ margin: 0 }}>Detach audio</p>
                                    </div>
                                </div>
                                <div className="speed d-inline-block w-fill">
                                    <span className="float-left">Speed</span>
                                    <span className="float-right">
                                        <select>
                                            <option>1.5x</option>
                                            <option>1.2x</option>
                                            <option>1.0x</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <span id="toggleClose" onClick={() => setIsExpand(false)}><img src={leftArrow} alt="arrow" width="7px" height="12px" /></span>
                        </div>
                    </div>

                    <div className={`centerSec ${isExpand ? 'reduse' : ''}`}>
                        <div className="whiteBoard"></div>
                    </div>
                    <div className="rightSec"></div>
                </div>
                <div className="bottomSec active"></div>
            </div>
        </div>
    )
}

export default PropertyComponent