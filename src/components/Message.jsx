import React from "react";

export default function Message() {
  return (
    <div className="message owner ">
      <div className="messageInfo">
       <img src="https://images.unsplash.com/photo-1604004215402-e0be233f39be?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
       <img src="https://images.unsplash.com/photo-1604004215402-e0be233f39be?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  );
}
