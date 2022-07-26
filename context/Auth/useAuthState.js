import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import authenticateUser from "../../utils/gunDB/authenticateUser";
import getUserSession from "../../utils/gunDB/getUserSession";
import logoutUser from "../../utils/gunDB/logOutUser";

const noUserObject = {
  alias: null,
  publicKey: null,
};

const useAuthState = () => {
  console.log("What up...!");
  const [userDetails, setUserDetails] = useState(noUserObject);
  const [authError, setAuthError] = useState({
    isError: false,
    message: null,
  });
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //check for user session on every refresh
    if (JSON.stringify(userDetails) === JSON.stringify(noUserObject)) {
      getUserSession().then((data) => setUserDetails(data));
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      router.push("/chat");
      //re-populate user details if user session is present..
      if (JSON.stringify(userDetails) === JSON.stringify(noUserObject)) {
        getUserSession().then((data) => setUserDetails(data));
      }
    }
  }, [redirect]);

  const handleAuthenticationCallback = async (userObject) => {
    //if authentication fails
    if (userObject.err) {
      setAuthError({ message: "Invalid Credentials", isError: true });
      return;
    }
    setRedirect(true);
  };

  const handleUserLogout = () => {
    console.log(`Loggin out ${userDetails.alias}...`);
    logoutUser();
    setUserDetails(noUserObject);
  };

  const handleUserLogin = (userName, password) => {
    authenticateUser(userName, password, handleAuthenticationCallback);
  };

  return {
    userDetails,
    authError,
    setUserDetails,
    handleUserLogout,
    handleUserLogin,
  };
};

export default useAuthState;
