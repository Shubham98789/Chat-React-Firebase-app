import React from "react";
import Cam from "../Img/cam.png";
import Add from "../Img/add.png";
import More from "../Img/more.png";
import Messages from "./Messages";
import Input from "./Input"

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
}
