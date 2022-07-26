import styles from "./navigationBar.module.css";

import { useAuth } from "../../context/Auth";

const NavigationBar = () => {
  const { userDetails, handleUserLogout } = useAuth();
  return (
    <div className={styles.component_wrapper}>
      <h4>{userDetails.alias || "You are not logged in"}</h4>
      <button onClick={handleUserLogout}>Logout</button>
    </div>
  );
};

export default NavigationBar;
