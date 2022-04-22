import Main from "./pages/Main";
import Item from "./components/Item";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/LoginPage/SignIn";
import Signup from "./pages/LoginPage/SignUp";
import {Routes,Route} from 'react-router-dom';
import MailLayout from "./pages/MailLayout";
import RequireAuth from "./contexts/RequireAuth";
import Home from "./pages/Dashboard/pages/home/Home";
import UserList from "./pages/Dashboard/pages/userList/UserList";
import VenderList from "./pages/Dashboard/pages/venderList/VenderList";
import CategoryList from "./pages/Dashboard/pages/category/CategoryList";
import HistoryList from "./pages/Dashboard/pages/history/HistoryList";
import User from "./pages/Dashboard/pages/user/User";
import NewUser from "./pages/Dashboard/pages/newUser/NewUser";
import ProductList from "./pages/Dashboard/pages/productList/ProductList";
import Product from "./pages/Dashboard/pages/product/Product";
import NewProduct from "./pages/Dashboard/pages/newProduct/NewProduct";

function App() {
  
  return (
    <Routes>
      <Route element={<MailLayout/>}>
        <Route path="/" element={<Main/>}></Route>
        {/* <Route path="products" element={<Category/>}></Route> */}
        <Route path="products" element={<Category/>}></Route>
        <Route path="product/:productName" element={ <Item/> } />
      </Route>
      

      {/* <Route element={<RequireAuth allowedRoles={1}/>}> */}
        <Route path="/admin-panel" element={<Dashboard/>}>
          <Route path="" element={<Home />} />
          <Route path="users" element={<UserList />} />
          <Route path="venders" element={<VenderList />} />
          <Route path="history" element={<HistoryList />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="products" element={<ProductList />}></Route>
          <Route path="category" element={<CategoryList />}></Route>
          <Route path="product/:productId" element={ <Product />} />
          <Route path="newproduct" element={<NewProduct />} />
        </Route>
        
      {/* </Route> */}

      <Route path="login" element={<Signin/>}></Route>
      <Route path="sign-up" element={<Signup/>}></Route>
    </Routes>
  );
}

export default App;
