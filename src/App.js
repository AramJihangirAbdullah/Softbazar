import Main from "./pages/Main";
import Item from "./components/Item";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signin from "./pages/LoginPage/SignIn";
import Signup from "./pages/LoginPage/SignUp";
import {Routes,Route} from 'react-router-dom';
import MailLayout from "./pages/MailLayout";
import RequireAuth from "./contexts/RequireAuth";

function App() {
  
  return (
    <Routes>
      <Route element={<MailLayout/>}>
        <Route path="/" element={<Main/>}></Route>
      </Route>

      {/* <Route element={<RequireAuth/>}> */}
      {/* </Route> */}
      <Route path="admin-panel" element={<Dashboard/>}></Route>
      <Route path="login" element={<Signin/>}></Route>
      <Route path="sign-up" element={<Signup/>}></Route>
    </Routes>
  );
}

export default App;
