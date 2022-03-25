import "../App.css";
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const MailLayout = () => {
  return (
    <div className="gridLayout">
        <Header />
        <Navigation/>
           <Outlet/>
        <Footer/>
    </div>

  )
}

export default MailLayout