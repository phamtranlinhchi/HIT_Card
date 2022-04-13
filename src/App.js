import React from 'react';
import Card from './Card';
import users from './data.json';

function App() {
    // function exportAllImgs() {
    //     const imgs = document.querySelectorAll('.card_container button');
    //     imgs.forEach((img) => img.click());
    // }
    return (
        <div className='App'>
            <div
                className='container'
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                }}
            >
                {users && users.map((user) => <Card user={user} />)}
            </div>
            {/* <button onClick={exportAllImgs()}>Export all images</button> */}
        </div>
    );
}

export default App;
