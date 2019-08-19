import React from 'react';
import './App.css';
import {IoIosFiling} from "react-icons/io";
import {IoIosSettings} from "react-icons/io";
import {IoIosPower} from "react-icons/io";
import {IoIosMenu} from "react-icons/io";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="protopass-button">
          <img alt= "" src="/button-texture.jpg" />
          PROTOPASS</button>
        <button className="game-button">GAME</button>
        <button className="vault-button">VAULT</button>
      </header>
        <div className="menu">
          <IoIosMenu className="menu-button"
          style={{height: 40, width: 40}}/>
        </div>

        <div className="secondary-menu">
            <IoIosFiling  className="feedback-button"
            style={{height: 40, width: 40}} />
            <IoIosSettings className="settings-button"
            style={{height: 40, width: 40}} />
            <IoIosPower className="exit-button"
             style={{height: 40, width: 40}} />
        </div>
    </div>
  );
}

export default App;
