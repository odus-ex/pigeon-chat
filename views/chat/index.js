import styles from "../../styles/chat.module.css";

import NavigationBar from "../../components/navigationBar";
import ChatBubble from "../../components/chatBubble";

import useChatState from "./useChatState";
const ChatView = () => {
  const {
    messages,
    userMessage,
    checkDB,
    handleMessageTyping,
    handleMessageSend,
  } = useChatState();
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
            onChange={handleMessageTyping}
            value={userMessage}
          />
          <button
            className={styles.user_actions_button}
            onClick={handleMessageSend}
          >
            Send
          </button>
          <button onClick={checkDB}>Check DB</button>
        </section>
      </main>
    </div>
  );
};

export default ChatView;
