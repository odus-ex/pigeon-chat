import NavigationBar from "../components/navigationBar";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.page_wrapper}>
      <NavigationBar />
      <main className={styles.content_wrapper}>
        <section className={styles.tabs_wrapper}>
          <button>Private Spaces</button>
          <button>Public Spaces</button>
        </section>
        <section className={styles.content_wrapper}>
          This is a body
          <button className={styles.new_chat_button}>Start a new chat</button>
        </section>
      </main>
    </div>
  );
};

export default Home;
