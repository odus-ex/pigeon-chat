import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import createNewUser from "../../utils/gunDB/createNewUser";

const useSignupState = () => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [signupError, setSignupError] = useState({
    message: "",
    isError: false,
  });
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (redirect) {
      router.push("/login");
    }
  }, [redirect]);

  const handleUserNameOnChange = (e) => {
    setUserName(e.currentTarget.value);
  };

  const handlePasswordOnChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onUserCreationCB = (userObject) => {
    if (userObject.err) {
      setSignupError({
        message: "Error signing you up. Try again later.",
        isError: true,
      });
      return;
    }

    //if successfull sign up
    setRedirect(true);
  };

  const handleOnSignup = () => {
    createNewUser(userName, password, onUserCreationCB);
  };

  return {
    userName,
    password,
    signupError,
    handleUserNameOnChange,
    handlePasswordOnChange,
    handleOnSignup,
  };
};

export default useSignupState;
