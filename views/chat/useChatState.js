import { useEffect, useState } from "react";
import { useGunDB } from "../../context/GunDB";
import {
  getAllMessages,
  createNewMessage,
} from "../../utils/adapters/gunDBAdapters";
// import createNewChatMessage from "../../utils/gunDB/createNewChatMessage";
import getChatSession from "../../utils/gunDB/getChatSession";

const useChatState = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isNewMessage, setIsNewMessage] = useState(false);

  const { chatDBRef } = useGunDB();

  useEffect(() => {
    //when the component loads, initialize chat DB
    getAllMessages(chatDBRef, getAllMessagesCallback);
  }, [chatDBRef]);

  useEffect(() => {
    if (isNewMessage) {
      console.log("Fetching for new messages...");
      getAllMessages(chatDBRef, getAllMessagesCallback);
      setIsNewMessage(false);
    }
  }, [isNewMessage]);

  //handlers
  const handleMessageTyping = (e) => setUserMessage(e.currentTarget.value);

  const handleMessageSend = async () => {
    createNewMessage(chatDBRef, userMessage);
    setUserMessage("");
    setIsNewMessage(true);
  };
  function getAllMessagesCallback(newMessage) {
    setMessages([...messages, newMessage]);
  }

  function checkDB() {
    getAllMessages(chatDBRef, getChatSessionCallback);
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
