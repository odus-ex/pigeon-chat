import { useState } from "react";
import ChatBubble from "../components/chatBubble";
import NavigationBar from "../components/navigationBar";
import styles from "../styles/chat.module.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const handleUserMessage = (e) => setUserMessage(e.currentTarget.value);
  const handleMessageSend = () => {
    setMessages([...messages, userMessage]);
    setUserMessage("");
  };
  return (
    <div className={styles.page_wrapper}>
      <NavigationBar />
      <main className={styles.content_wrapper}>
        <section className={styles.conversation_wrapper}>
          {messages.map((message) => (
            <ChatBubble key={Math.random()} textMessage={message} />
          ))}
        </section>
        <section className={styles.user_actions_wrapper}>
          <input
            className={styles.user_actions_input}
            onChange={handleUserMessage}
            value={userMessage}
          />
          <button
            className={styles.user_actions_button}
            onClick={handleMessageSend}
          >
            Send
          </button>
        </section>
      </main>
    </div>
  );
};

export default Chat;
