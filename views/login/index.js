import styles from "../../styles/login.module.css";
import useLoginState from "./useLoginState";

const LoginView = () => {
  let {
    userName,
    password,
    authError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnLogin,
  } = useLoginState();
  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <h1> Logo</h1>
        <h5>Login to your pigeon profile</h5>
        {authError.isError && <h3>{authError.message}</h3>}
        <input value={userName || ""} onChange={handleUserNameOnChange} />
        <input
          value={password || ""}
          type="password"
          onChange={handlePasswordOnChange}
        />
        <button onClick={handleOnLogin}>Login</button>
        <h4>
          Not a member yet? <a href="www.google.com">Become a member</a>
        </h4>
      </main>
    </div>
  );
};

export default LoginView;
