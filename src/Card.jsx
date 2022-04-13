import React from 'react';
import './Card.css'

const Card =  React.forwardRef((props, ref) => {
    return (
    
        <div className="card" ref={ref}>
            <div className="avatar">
                <img src={props.avatar} alt="" />
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