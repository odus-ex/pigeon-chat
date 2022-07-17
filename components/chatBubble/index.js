import styles from "./chatBubble.module.css";

const ChatBubble = ({ textMessage }) => {
  return (
    <div className={styles.component_wrapper}>
      <section className={styles.text_message_wrapper}>{textMessage}</section>
      <section className={styles.text_metadata_wrapper}>
        <p className={styles.text_metadata_text}>Meta datas</p>
      </section>
    </div>
  );
};

export default ChatBubble;
