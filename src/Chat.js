import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic } from "@material-ui/icons";


function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  console.log(input);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {

  }

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && 'chat_reciever'}`}>
          <span className="chat_name">Luke</span>
          hey guys
          <span className="chat_timestamp">3:50</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticon/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a Message" type="text"/>
          <button onClick={sendMessage} type="submit">Send a Message</button>
        </form>
        <Mic/>
      </div>
    </div>
  );
}

export default Chat;
