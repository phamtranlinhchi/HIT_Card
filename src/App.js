import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import Card from './Card';

const user = {
    avatar: './avatar.jpeg',
    name: 'PHẠM TRẦN LINH CHI',
    class_year: 'KTPM01-K15',
    qr_code: './qrcode.png',
};

function App() {
    const componentRef = useRef();
    return (
        <div className='App'>
            <Card
                avatar={user.avatar}
                name={user.name}
                class_year={user.class_year}
                qr_code={user.qr_code}
                ref={componentRef}
            />
            <button onClick={() => exportComponentAsPNG(componentRef)}>
                Export As PNG
            </button>
        </div>
    );
}

export default App;
