import { useEffect, useState } from "react";
import createNewChatMessage from "../../utils/gunDB/createNewChatMessage";
import getChatSession from "../../utils/gunDB/getChatSession";

const useChatState = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    //when the component loads, initialize chat DB
    getChatSession(getChatSessionCallback);
  }, []);

  //handlers
  const handleMessageTyping = (e) => setUserMessage(e.currentTarget.value);
  const handleMessageSend = async () => {
    // setMessages([...messages, userMessage]);
    createNewChatMessage(userMessage);
    setUserMessage("");
    getChatSession(getChatSessionCallback);
  };
  function getChatSessionCallback(newMessage) {
    console.log("WTF ===>", newMessage, messages);
    setMessages([...messages, newMessage]);
  }

  function checkDB() {
    getChatSession(getChatSessionCallback);
  }

  return {
    messages,
    userMessage,
    handleMessageTyping,
    handleMessageSend,
    checkDB,
  };
};

export default useChatState;
