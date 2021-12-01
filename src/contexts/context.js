import React, { useState, useContext, useEffect} from 'react';
import  axios  from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [ldealproducts, setLdealproducts] = useState([])

  let getData =  async () => {
    axios('https://fakestoreapi.com/products?limit=4')
    .then((response)=> {
    setProducts(response.data)
  })
 }
  let getLData =  async () => {
    axios('https://fakestoreapi.com/products?limit=5')
    .then((response)=> {
    setLdealproducts(response.data)
  })
 }

  useEffect(() => {
      getData()
      getLData()
  }, []);


  return (
    <AppContext.Provider
      value={{
        products,ldealproducts
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };