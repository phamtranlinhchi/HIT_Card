import React from 'react';
import Card from './Card';
import users from './data.json';

function App() {
    return (
        <div
            className='App'
            style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            {users && users.map((user) => <Card user={user} />)}
        </div>
    );
}

export default App;
