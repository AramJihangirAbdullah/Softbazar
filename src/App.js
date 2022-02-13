import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Main from "./components/Main";
import Item from "./components/Item";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/LoginPage/Signin";
import { AppProvider } from "./contexts/navContext";
function App() {
  
  return (
    <>
    <AppProvider>
      {/* <div className="gridLayout"> */}

        {/* <Header />
        <Navigation/> */}
        
        {/* <Category/> */}
        {/* <Main/> */}
        {/* <Item/> */}
        {/* <Footer/> */}
      {/* </div> */}
      {/* <Dashboard/> */}
      <Signin/>

    </AppProvider>
    
    </>
  );
}

export default App;
