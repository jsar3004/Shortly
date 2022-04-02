import './App.css';
import NavBar from './Components/Navbar';
import SimpleContainer from './Components/Home'
import Bottombar from './Components/Bottombar';
import Shortened from './Components/Shortened';
import Error from './Components/Error';
import Count from './Components/Count';
import { Routes, Route } from "react-router-dom";
import ClickCount from './Components/Clickcounter';
function App() {
  return (
    <>
     <NavBar/>
     {/* <Routes> */}
     {/* <Route path="/" element={<SimpleContainer/>}/> */}
     {/* <Count/> */}
     {/* <Shortened/> */}
     {/* <Error/> */}
     {/* </Routes> */}
     <ClickCount/>
     <Bottombar/>
    </>
  );
}

export default App;
