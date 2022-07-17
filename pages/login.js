import styles from "../styles/login.module.css";

const Login = () => {
  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <h1> Logo</h1>
        <h5>Login to your pigeon profile</h5>
        <input />
        <input />
        <button>Login</button>
        <h4>
          {" "}
          Not a member yet? <a href="www.google.com">Become a member</a>
        </h4>
      </main>
    </div>
  );
};

export default Login;
