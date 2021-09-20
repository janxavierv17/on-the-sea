import { createContext, useState } from "react";

type ContextState = {
  user: string;
  token: string;
};

const contextDefaultVals: ContextState = {
  user: "",
  token: "",
};

const UserContext = createContext<ContextState>(contextDefaultVals);

const UserProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState({
    user: {},
    token: "",
  });

  useState(() => {
    setUserState(JSON.parse(window.localStorage.getItem("user") || "{}"));
  });

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
