import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Component/Home/Home'
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";


function App() {
  return (
      <Router>
        {/* <Navbar /> */}
        <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/register"} element={<Register/>} />
        <Route path={"/login"} element={<Login/>} />
          {/* <Route path={"/register"} element={<Register/>} />
          <Route path={"/login"} element={<Login/>} /> */}
          {/* <Route path={"/cart"} element={<Cart />} />
          <Route path={"/test"} element={<Test />} />
          <Route path={"/render"} element={<Render />} /> */}
        </Routes>
      </Router>
  );
}

export default App;
