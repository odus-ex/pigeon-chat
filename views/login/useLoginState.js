import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import authenticateUser from "../../utils/gunDB/authenticateUser";
const useLoginState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [authError, setAuthError] = useState({
    message: "",
    isError: false,
  });

  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.push("/home");
    }
  }, [redirect]);

  const handleUserNameOnChange = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onAuthenticationCB = (userObject) => {
    //if authentication fails
    if (userObject.err) {
      setAuthError({ message: "Invalid Credentials", isError: true });
      return;
    }
    //if successfull authentication
    console.log("Created user ===>", userObject);
    setRedirect(true);
  };

  const handleOnLogin = () => {
    authenticateUser(userName, password, onAuthenticationCB);
  };

  return {
    userName,
    password,
    authError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnLogin,
  };
};

export default useLoginState;
