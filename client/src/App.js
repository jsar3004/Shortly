import './App.css';
import NavBar from './Components/Navbar';
import SimpleContainer from './Components/Home'
import Bottombar from './Components/Bottombar';
import Shortened from './Components/Shortened';
import Error from './Components/Error';
function App() {
  return (
    <>
     <NavBar/>
     <SimpleContainer/>
     {/* <Shortened/> */}
     {/* <Error/> */}
     <Bottombar/>
    </>
  );
}

export default App;
