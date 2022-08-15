import React, {useState} from "react";

export const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const updateHeaderIsScrolled = (value) => {
    setIsScrolled(value === "scrolled" ? true : false);
  };

  return (
    <AppContext.Provider
      value={{
        headerIsScrolled: isScrolled,
        updateHeaderIsScrolled,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
