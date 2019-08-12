import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="protopass-button">PROTOPASS</button>
        <button className="game-button">GAME</button>
        <button className="vault-button">VAULT</button>
      </header>
        <div className="menu">
          <button className="menu-button"/>
        </div>

        <div className="secondary-menu">
          <button className="feedback-button"/>
          <button className="settings-button"/>
          <button className="exit-button"/>
        </div>
    </div>
  );
}

export default App;
