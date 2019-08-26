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
import { Modal } from 'antd';

class App extends React.Component {

  state = {
    isOpen: false,
    visible: false
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    // var { isOpen } = this.state;

    return (

      <div className="App">

        <div class="wheel">
          <script src="./menu_wheel.js"></script>
          <div class="arc"><i class="fas fa-home"></i></div>
          <div class="arc"><i class="fas fa-question"></i></div>
          <div class="arc"><i class="fas fa-bell"></i></div>
          <div class="arc"><i class="fas fa-camera"></i></div>
          <div class="arc"><i class="fas fa-trash-alt"></i></div>
          <div class="arc"><i class="fas fa-save"></i></div>
          <div class="arc"><i class="fas fa-flag"></i></div>
          <div class="arc"><i class="fab fa-codepen"></i></div>
        </div>
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
              menuClicked={() => this.setState({ isOpen: !this.state.isOpen })}
              color='white'
              width={30}
              height={20}
            />
          </div>
          {this.state.isOpen && <Menu className="season-info"
            style={{ height: 30, width: 100 }} />}
        </div>
        <div className="secondary-menu">
          <IoIosFiling className="feedback-button"
            style={{ height: 40, width: 40 }}
            onClick={this.showModal} />
          <IoIosSettings className="settings-button"
            style={{ height: 40, width: 40 }} />
          <IoIosPower className="exit-button"
            style={{ height: 40, width: 40 }} />
        </div>
        <div className="profile">
          <img className="profile-pic" alt='' src={Portrait} />
        </div>
        <button className="play-button">PLAY</button>
        <div>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Feedback Form coming soon...</p>
          </Modal>
        </div>
      </div>
    )
  }
}

export default App;