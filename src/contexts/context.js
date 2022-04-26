import React, { useState, useContext, useEffect} from 'react';
import  axios  from "axios";
const AppContext = React.createContext();
function modifyimage(jsonObj) {
  let words=[];
  let dom = 'http://127.0.0.1:8000/uploads/images/'
  for (var i = 0; i < jsonObj.length; i++) {
    let datajson = jsonObj[i].image.slice(1, -1);
       words = datajson.split(',');
       jsonObj[i].img = dom +  words[0].slice(1, -1);
    }
    console.log(jsonObj);
      return jsonObj;
}
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [ldealproducts, setLdealproducts] = useState([])

  let getData =  async () => {
    axios('http://127.0.0.1:8000/api/products')
    .then((response)=> {
      setProducts((modifyimage(response.data)).filter((word,i) => i < 4))
     
  })
 }
  let getLData =  async () => {
    axios('http://127.0.0.1:8000/api/ai_machine/ai/{id}')
    .then((response)=> {
    setLdealproducts((modifyimage(response.data)).filter((word,i) => i < 5))
  })
 }

  useEffect(() => {
      getData()
      // getLData()
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