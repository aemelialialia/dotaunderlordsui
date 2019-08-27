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
<<<<<<< HEAD
import { Modal } from 'antd';
=======
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6

class App extends React.Component {

  state = {
<<<<<<< HEAD
    isOpen: false,
    visible: false
=======
    isOpen: false
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

<<<<<<< HEAD
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

=======
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
  render() {
    // var { isOpen } = this.state;

    return (
<<<<<<< HEAD

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
=======
      <div className="App">
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
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
<<<<<<< HEAD
              menuClicked={() => this.setState({ isOpen: !this.state.isOpen })}
=======
              menuClicked={() => this.setState({ isOpen : !this.state.isOpen })}
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
              color='white'
              width={30}
              height={20}
            />
          </div>
          {this.state.isOpen && <Menu className="season-info"
<<<<<<< HEAD
            style={{ height: 30, width: 100 }} />}
        </div>
        <div className="secondary-menu">
          <IoIosFiling className="feedback-button"
            style={{ height: 40, width: 40 }}
            onClick={this.showModal} />
=======
          style={{height: 30, width: 100}}/>}
        </div>
        <div className="secondary-menu">
          <IoIosFiling className="feedback-button"
            style={{ height: 40, width: 40 }} />
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
          <IoIosSettings className="settings-button"
            style={{ height: 40, width: 40 }} />
          <IoIosPower className="exit-button"
            style={{ height: 40, width: 40 }} />
        </div>
        <div className="profile">
          <img className="profile-pic" alt='' src={Portrait} />
<<<<<<< HEAD
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
=======
          <div className="level-progress">
          Hello
          </div>
          <div className="daily-chllenges">
            Challenge
          </div>
          <button className="play-button">PLAY</button>
>>>>>>> 68955f444d71de544aa845f60a8d30ba85899cb6
        </div>
      </div>
    )
  }
}

export default App;