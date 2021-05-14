import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Players.css';

const Players = (props) => {
    const {name, img, role, salary,} = props.players;
    return (
            <div>
                <img src={img} alt={name} />
                <h3>Name: {name}</h3>
                <h4>Role: {role}</h4>
                <p>Salary: {salary}</p>
                <button className="add-btn" onClick={() => props.addPlayerHandler(props.players)}> <FontAwesomeIcon icon={faUserPlus} /> Add Me</button>
            </div>
    );
};

export default Players;