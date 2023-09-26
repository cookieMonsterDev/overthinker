"use client";
import useSocket from "@/hooks/useSocket";
import { useEffect } from "react";

const Chat = () => {
  const s = useSocket('http://localhost:81')

  useEffect(() => {
    return () => {};
  }, []);

  const sendMessage = () => {
    s && s.emit("message", { message: "Hello, WebSocket server!" });
  };

  return (
    <div>
      <h1>Chat</h1>
      <button className="border-2 border-black px-4" onClick={sendMessage}>send</button>
    </div>
  );
};

export default Chat;
