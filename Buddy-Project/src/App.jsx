
//  import React, { useState } from 'react';
import './App.css';
import Air from "./images/Rectangle 215.png"
import Ell from "./images/Ellipse 156.png"
import Eli from "./images/Ellipse 144.png"
import Vec from "./images/Vector22.png"
import Bunda from "./images/Rectangle 211.png"
import Elli from "./images/Ellipse 158.png"
import Smi from "./images/Ellipse 137.png"
import Smii from "./images/Ellipse 138.png"
import Vect from "./images/Vector 21.png"
import Ellipse from "./images/Ellipse 135.png"
import Ellipse1 from "./images/Ellipse 157.png"
import Vector from "./images/Vector 24.png"
import Vector20 from "./images/Vector 20.png"
import Vector19 from "./images/Vector 19.png"
import Ellipse131 from "./images/Ellipse 131.png"
import Ellipse130 from "./images/Ellipse 130.png"
import Ellipse155 from "./images/Ellipse 155.png"
import Ellipse153 from "./images/Ellipse 153.png"
import Ellipse154 from "./images/Ellipse 154.png"
import Vectorr from "./images/Vector.png"
import { useState } from 'react';
// import { Image } from "./image";
// import Navbar from './component';

function App() {
  const [isOpen, setIsOpen] = useState()

  function toggleModal() {
    setIsOpen(!isOpen);
  };

  const Modal = ({ isOpen, toggleModal }) => {

    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button> Close</button>
      </div>
    </div>

  };


  const Overlay = ({ isOpen, toggleModal }) => {
    // return (
    <>
      <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={toggleModal}></div>
      <div>
        <button onClick={toggleModal}>Open Modal</button>
        <Overlay isOpen={isOpen} toggleModal={toggleModal} />
        <Modal isOpen={isOpen} toggleModal={toggleModal} />
      </div>
    </>
  }

  return (
    <div className="App">
      <div className="ade">
        <p className='adeade'>Dear <b>ADE,</b></p>
          <br />
          <p className='ade-content' > Emilia Clark has requested to be your buddy</p>

          <p className="profile">View profile</p>
          <span><img className="rec" src={Air} /></span>
          <span><img className="rect" src={Ell} /></span>
          <span><img className="recta" src={Eli} /></span>
          <span><img className="smi" src={Smi} /></span>
          <span><img className="smii" src={Smii} /></span>
          <span><img className="vec" src={Vec} /></span>
          <span><img className="ellli" src={Elli} /></span>
          <p className="vector"></p>
          <button className="accept" onClick={toggleModal}>Accept</button>
          <button className="decline">Decline</button>
          <span><img className="bunda" src={Bunda} /></span>
          <span><img className="elli" src={Elli} /></span>
          <span><img className="vect" src={Vect} /></span>
          <span><img className="ellipse" src={Ellipse} /></span>
          <span><img className="ellipsee" src={Ellipse1} /></span>
          <span><img className="vector" src={Vector} /></span>
          <span><img className="vector20" src={Vector20} /></span>
          <span><img className="vector19" src={Vector19} /></span>
          <span><img className="Ellipse131" src={Ellipse131} /></span>
          <span><img className="Ellipse130" src={Ellipse130} /></span>
          <span><img className="Ellipse144" src={Eli} /></span>
          <span><img className="ellipse135" src={Ellipse} /></span>
          <span><img className="ellipse155" src={Ellipse155} /></span>
          <span><img className="ellipse153" src={Ellipse153} /></span>
          <span><img className="ellipse154" src={Ellipse154} /></span>
          <a href="#" onClick={toggleModal}><span><img className="vectorr" src={Vectorr} /></span></a>

        </div>
      </div>
    )
  };
export default App;
