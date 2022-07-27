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
    setMessages([...messages, userMessage]);
    setUserMessage("");
    createNewChatMessage(userMessage);
  };
  function getChatSessionCallback(data) {
    console.log("CB ....", data);
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
