import React, { Component } from 'react';
import './menubarComponent.css';
import logo from '../../asserts/Vmaker-logo.png'
import undo from '../../asserts/undo.png'
import redo from '../../asserts/redo.png'
import timer from '../../asserts/timer.png'
import close from '../../asserts/close.png'
import VideoThumbnailComponent from '../VideoThumbnail/VideoThumbnailComponent';
import DropDownComponent from '../DropDown/DropDownComponent';
import ModalComponent from '../Modal/ModalComponent';
import PropertyComponent from '../Property/PropertyComponent';

export class MenuBarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Vmaker Video Recording',
            isShowModal: false,
            isChecked: false,
            isFileOpen: false,
        }
    }

    render() {
        return (
            <>
                <div className='menubar-container'>
                    <div className='container'>
                        <div className='logo-container'>
                            <img className='logo' src={logo} height='40px' />
                        </div>
                        <span className='span-divider'></span>
                        <div className='button' onClick={() => this.setState({ isFileOpen: !this.state.isFileOpen })}>File</div>
                        <span className='span-divider'></span>
                        <div className='button'>Resize</div>
                        <span className='span-divider'></span>
                        <input type='text' name='inputFieldName'
                            value={this.state.title}
                            onChange={(e) => {
                                this.setState({ title: e.target.value })
                            }} />
                    </div>
                    <div className='container'>
                        <p className='para'>Quality will go back to original standard post editing</p>
                        <img className='undo-icon' src={undo} />
                        <img className='redo-icon' src={redo} />
                        <span className='span-divider'></span>
                        <img className='timer-icon' src={timer} />
                        <button className='export-btn' onClick={() => this.setState({ isShowModal: !this.state.isShowModal })}>Export</button>
                    </div>
                </div>
                <div className={`modal-container ${this.state.isShowModal && 'modal-h'}`}>
                    <div className='modal export-modal float-right'>
                        <div className='popUphead'>
                            <div className='w-100 d-inline-block'>
                                <span className='float-left'>Export</span>
                                <span className='float-right' onClick={() => this.setState({ isShowModal: false })}><img className='close-btn' src={close} /></span>
                            </div>
                        </div>
                        <div className='resolution'>
                            <span>Resolution</span>
                            <span className='float-right'>
                                <DropDownComponent />
                            </span>
                        </div>
                        <div className='thumbnail'>
                            <p>Thumbnail</p>
                            <VideoThumbnailComponent />
                        </div>

                        <button className='modal-btn' onClick={() => { }}>Export</button>
                    </div>
                </div>

                <div className={`transition-modal ${this.state.isFileOpen && 'modal-h'}`}>
                    <ModalComponent title={this.state.title} isFileOpen={this.state.isFileOpen} />
                </div>

                {/* Library section */}
                <PropertyComponent />
            </>
        )
    }
}

export default MenuBarComponent