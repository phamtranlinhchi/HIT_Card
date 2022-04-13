
import { exportComponentAsPNG } from 'react-component-export-image';
import React, {useRef} from 'react';
import './Card.css'

const Card =  React.forwardRef(function ({user}) {
    const componentRef = useRef();

    const splitName = user.full_name.split(' ');
    const name = splitName[splitName.length - 1];

    return (
        <div className="container">
            <div className="card" ref={componentRef}>
                <div className="bgcard">
                    <img src="./bg.png" alt="backgroundcard" />
                </div>
                <div className="avatar">
                    <img src={`api.hithaui.com${user.avatar}`} alt="avatar" />
                </div>
                <div className="name">
                    {user.full_name.toUpperCase()}
                </div>
                <div className="class-year">
                    {`${user.class_name}-K${user.school_year}`}
                </div>
                <div className="qrcode">
                    <img src={`api.hithaui.com${user.qr_code}`} alt="qrcode" />
                </div>
            </div>
            <button onClick={() => exportComponentAsPNG(componentRef)}>
                Export {name} As PNG
            </button>
        </div>
    )
})

export default Card;