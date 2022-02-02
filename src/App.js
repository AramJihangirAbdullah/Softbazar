import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import Main from "./components/Main";
import Item from "./components/Item";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import { AppProvider } from "./contexts/navContext";
function App() {
  
  return (
    <>
    <AppProvider>
      <div className="gridLayout">

        {/* <Header /> */}
        {/* <Navigation/> */}
        <Dashboard/>
        {/* <Category/> */}
        {/* <Main/> */}
        {/* <Item/> */}
        <Footer/>
      </div>

    </AppProvider>
    
    </>
  );
}

export default App;
