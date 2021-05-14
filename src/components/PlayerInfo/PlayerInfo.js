import React from 'react';
import './PlayerInfo.css';

const PlayerInfo = (props) => {
    const addPlayer = props.addPlayer
    let name = [];
    let salary = 0;
    for (let i = 0; i < addPlayer.length; i++) {
        const element = addPlayer[i];
        name = name +", "+ element.name;
        salary = salary + element.salary;
    }
    return (
        <div className="player-information">
            <h3>Total Listed Players: {addPlayer.length}</h3>
            <h4>Players Name: <p className='playerName'>{name}</p></h4>
            <h3>Total Budged: <p className='totalAmount'>${salary}</p></h3>
        </div>
    );
};

export default PlayerInfo;