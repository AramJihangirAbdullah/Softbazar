import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import { Outlet } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import "../../css/dashboard.css";

function Dashboard() {
  return (
    <>
    {/* pathakan chakka wahshy */}
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet/>
      </div>
    </>
  );
}

export default Dashboard;