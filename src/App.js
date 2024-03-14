import './Style.scss';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'>
       <Route index element= {<Home/>}/>
       <Route path="Login" element= {<Login/>}/>
       <Route path="Regsiter" element= {<Register/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
