import React, { useState, useContext} from 'react';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () =>{
      setIsNavOpen(!isNavOpen);
  }
  return (
    <AppContext.Provider
      value={{
        isNavOpen,toggleNav
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useNavContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };