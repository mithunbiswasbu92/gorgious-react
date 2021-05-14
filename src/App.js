import logo from './logo.svg';
import './App.css';
import Players from './components/Players/Players';
import { useEffect, useState } from 'react';
import data from './data/data.json';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';

function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([])
  useEffect( () => setPlayers(data) ,[]);
  const addPlayerHandler = (players) => {
    const newAdded = [...addPlayer, players];
    setAddPlayer(newAdded);
  };
  return (
    <div className="App">
      <div className="player-container">
        {
          players.map( players => <Players players ={players} addPlayerHandler={addPlayerHandler}></Players>)
        }
      </div>
      <div className="plInfo-container">
        <PlayerInfo addPlayer={addPlayer}></PlayerInfo>
      </div>
    </div>
  );
}

export default App;
