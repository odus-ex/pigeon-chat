import { useContext, createContext } from "react";
import useAuthState from "./useAuthState";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { userDetails } = useAuthState();
  console.log("jj", userDetails);
  return (
    <AuthContext.Provider value={useAuthState()}>
      {userDetails.alias ? children : <h1>Loading...</h1>}
    </AuthContext.Provider>
  );
};
