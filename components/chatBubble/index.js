import { useAuth } from "../../context/Auth";
import styles from "./chatBubble.module.css";

const ChatBubble = ({ textMessage, timeInNonISOFormat, author }) => {
  let { userDetails } = useAuth();

  const selfText = userDetails.alias !== author;

  const getPublishedTime = (timeNumber) => {
    let isoDTTM = new Date(timeNumber).toISOString();
    let dttmArray = isoDTTM.split("T");
    return `${dttmArray[0]} ${dttmArray[1].slice(0, 5)}`;
  };
  return (
    <div
      className={`${styles.component_wrapper} ${
        selfText && styles.component_wrapper__alternate
      }`}
    >
      <section className={styles.text_message_wrapper}>{textMessage}</section>
      <section className={styles.text_metadata_wrapper}>
        {selfText && <p className={styles.text_author}>{author}</p>}
        <p className={styles.text_dttm}>
          {getPublishedTime(timeInNonISOFormat)}
        </p>
      </section>
    </div>
  );
};

export default ChatBubble;
