import styles from "../../styles/signup.module.css";

import useSingupState from "./useSignupState";

const SingupView = () => {
  const {
    userName,
    password,
    signupError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnSignup,
  } = useSingupState();

  return (
    <div className={styles.page_wrapper}>
      <main className={styles.form_wrapper}>
        <h1> Logo</h1>
        <h5>Sign in to a blazingly fast experience</h5>
        {signupError.isError && <h4>{signupError.message}</h4>}
        <input value={userName || ""} onChange={handleUserNameOnChange} />
        <input
          value={password || ""}
          type="password"
          onChange={handlePasswordOnChange}
        />
        <button onClick={handleOnSignup}>Sign Up</button>
        <h4>
          Already a memeber? <a href="www.google.com">Go to login</a>
        </h4>
      </main>
    </div>
  );
};

export default SingupView;
