import React from 'react';
import './App.css';
import { IoIosFiling } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoIosPower } from "react-icons/io";
import Protopass from './protopass.png';
import Game from './game.png';
import Vault from './vault.png';
import HamburgerMenu from 'react-hamburger-menu';
import Portrait from './portrait.png';
import Menu from './Menu.js';

class App extends React.Component {

  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    // var { isOpen } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <button className="buttons">
            <img className="protopass-button" alt="" src={Protopass} />
          </button>
          <button className="buttons">
            <img className="game-button" alt="" src={Game} />
          </button>
          <button className="buttons">
            <img className="vault-button" alt="" src={Vault} />
          </button>
        </header>
        <div className="menu">
          <div className="menu-button">
            <HamburgerMenu
              isOpen={this.state.isOpen}
              menuClicked={() => this.setState({ isOpen : !this.state.isOpen })}
              color='white'
              width={30}
              height={20}
            />
          </div>
          {this.state.isOpen && <Menu className="season-info"
          style={{height: 30, width: 100}}/>}
        </div>
        <div className="secondary-menu">
          <IoIosFiling className="feedback-button"
            style={{ height: 40, width: 40 }} />
          <IoIosSettings className="settings-button"
            style={{ height: 40, width: 40 }} />
          <IoIosPower className="exit-button"
            style={{ height: 40, width: 40 }} />
        </div>
        <div className="profile">
          <img className="profile-pic" alt='' src={Portrait} />
          <div className="level-progress">
          Hello
          </div>
          <div className="daily-chllenges">
            Challenge
          </div>
          <button className="play-button">PLAY</button>
        </div>
      </div>
    )
  }
}

export default App;