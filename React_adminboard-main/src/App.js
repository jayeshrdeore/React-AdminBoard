import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { serviceInputs, userInputs } from "./formSource";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const{darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" :"app"}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="login" element={<Login/>}></Route>
          <Route path="customers">
          <Route index element={<List/>}></Route>
          <Route path=":userId" element={<Single/>}></Route>
          <Route path="new" element={<New inputs={userInputs} title="Add New Customer"/>}></Route>
          </Route>
          <Route path="services">
          <Route index element={<List/>}></Route>
          <Route path=":productId" element={<Single/>}></Route>
          <Route path="new" element={<New inputs={serviceInputs} title="Add New Service"/>}></Route>
          </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
