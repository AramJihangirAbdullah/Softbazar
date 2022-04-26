import React,{useContext,useEffect,useState} from 'react'
import LdealProduct from "./LdealProduct";
import { useGlobalContext } from "../contexts/context";
import AuthContext  from "../contexts/AuthContext";
import  axios  from "axios";

const Ldeal = ({title}) => {
    const [ldealproducts, setLdealproducts] = useState([])

    let {userId} = useContext(AuthContext)
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
    let getLData =  async (id) => {

        axios(`http://127.0.0.1:8000/api/ai_machine/ai/${id}`)
        .then((response)=> {
        setLdealproducts((modifyimage(response.data)).filter((word,i) => i < 5))
      })
     }
     useEffect(() => {
         if(userId){
             getLData(userId)
         }
     
     }, [userId])
     
    // const { ldealproducts } = useGlobalContext();
    return (
        <div id="Ldeal">
            <div className="deal_header">
                <img className="deal_icon" src="icons/house-top-icon-12.png" alt="" />
                <h3>{title}</h3>
            </div>
            <div className="Lproducts">
                
            {ldealproducts.map((ldealproduct) => {
                const { id } = ldealproduct;
                return (
                    
                        <LdealProduct key={id} {...ldealproduct}/>
                
                );
                })}
            
            </div>
        </div>
    )
}

export default Ldeal
