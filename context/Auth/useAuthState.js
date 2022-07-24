import { useState } from "react";

const useAuthState = () => {
  const [user, setUser] = useState("");

  return { user };
};

export default useAuthState;
