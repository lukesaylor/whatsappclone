import React, {useEffect} from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {

    const

useEffect(() => {
    
}, [input])

  return (
    <div className="sidebarChat">
      <Avatar src="https://avatars.dicebear.com/api/human/oijsdf.svg"/>
      <div className="sidebarChat_info">
        <h2>Room Name</h2>
        <p>Last Message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
