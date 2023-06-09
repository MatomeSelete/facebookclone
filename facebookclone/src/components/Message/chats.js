import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; 

import Tic from '../images/ticTacToe.png';
import Leo from '../images/Leo.jpeg';
import Ciara from '../images/Ciara.jpeg';
import Sarra from '../images/Sarra.jpeg';

function Chats() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a different route
    navigate('./Inbox.js');
  };

  return (
    <div className="chatsBody" >
      <div className="chatsCards ">
        <button class="card " onClick={handleClick} >
          <div className="chatimg"> 
            <img src={Ciara} class="card-img-top" alt="..." />
          </div>
 
          <div class="nameText">
            <h5 class="card-text">Ciara</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </button>

        <div class="card">
          <div className="chatimg"> 
            <img src={Sarra} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h5 class="card-text">Sarra</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>


        <div class="card">
          <div className="chatimg"> 
            <img src={Leo} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h5 class="card-text">Leo</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>

        <div class="card">
          <div className="chatimg"> 
            <img src={Tic} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h6 class="card-text">Tic</h6>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>

        <div class="card">
          <div className="chatimg"> 
            <img src={Sarra} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h5 class="card-text">Sarra</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>


        <div class="card">
          <div className="chatimg"> 
            <img src={Leo} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h5 class="card-text">Leo</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>

        <div class="card">
          <div className="chatimg"> 
            <img src={Ciara} class="card-img-top" alt="..." />
          </div>

          <div class="nameText">
            <h5 class="card-text">Some quick</h5>
            <p>scrollbar is added to scroll.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Chats;
