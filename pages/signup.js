import styles from "../styles/signup.module.css";

const Signup = () => {
  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <h1> Logo</h1>
        <h5>Sign in to a blazingly fast experience</h5>
        <input />
        <input />
        <input />
        <button>Sign Up</button>
        <h4>
          {" "}
          Already a memeber? <a href="www.google.com">Go to login</a>
        </h4>
      </main>
    </div>
  );
};

export default Signup;
