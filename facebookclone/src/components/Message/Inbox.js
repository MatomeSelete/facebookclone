import React from "react";

import Tic from "../images/ticTacToe.png";
import Leo from "../images/Leo.jpeg";
import Ciara from "../images/Ciara.jpeg";
import Sarra from "../images/Sarra.jpeg";

function Inbox() {
  return (
    <body className="inboxBody">
      {/* <h2>Chat Messages</h2> */}

      <div className="overflow-auto">
        <div class="container">
          <img
            className="inboxImg"
            src={Leo}
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <p>Hello. How are you today?</p>
          <span class="time-right">11:00</span>
        </div>

        <div class="container darker">
          <img
            src={Ciara}
            alt="Avatar"
            className="right"
            style={{ width: "100%" }}
          />
          <p>Hey! I'm fine. Thanks for asking!</p>
          <span class="time-left">11:01</span>
        </div>

        <div class="container">
          <img
            className="inboxImg"
            src={Leo}
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <p>Sweet! So, what do you wanna do today?</p>
          <span class="time-right">11:02</span>
        </div>

        <div class="container darker">
          <img
            src={Ciara}
            alt="Avatar"
            className="right"
            style={{ width: "100%" }}
          />
          <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
          <span class="time-left">11:05</span>
        </div>
      </div>
    </body>
  );
}

export default Inbox;
