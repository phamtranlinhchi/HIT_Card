import React from 'react';
import './Card.css'

const Card =  React.forwardRef(function ({user}, ref) {
    return (
    
        <div className="card" ref={ref}>
            <div className="bgcard">
                <img src="./bg.png" alt="backgroundcard" />
            </div>
            <div className="avatar">
                <img src={user.avatar} alt="avatar" />
            </div>
            <div className="name">
                {user.name}
            </div>
            <div className="class-year">
                {user.class_year}
            </div>
            <div className="qrcode">
                <img src={user.qr_code} alt="" />
            </div>
        </div>
    )
})

export default Card;