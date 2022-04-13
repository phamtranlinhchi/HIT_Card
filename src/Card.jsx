import React from 'react';
import './Card.css'

const Card =  React.forwardRef((props, ref) => {
    return (
    
        <div className="card" ref={ref}>
            <div className="bgcard">
                <img src="./bg.png" alt="backgroundcard" />
            </div>
            <div className="avatar">
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="class-year">
                {props.class_year}
            </div>
            <div className="qrcode">
                <img src={props.qr_code} alt="" />
            </div>
        </div>
    )
})

export default Card;