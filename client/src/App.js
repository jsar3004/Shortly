import './App.css';
import NavBar from './Components/Navbar';
import SimpleContainer from './Components/Home'
import Bottombar from './Components/Bottombar';
import Shortened from './Components/Shortened';
import Error from './Components/Error';
import Count from './Components/Count';
import { Routes, Route } from "react-router-dom";
import ClickCount from './Components/Clickcounter';
import { useState } from 'react';

function App() {
  const[shorturl,setshorturl]=useState("");
  const[longurl,setlongurl]=useState("");
  return (
    <>
     <NavBar/>
     <Routes>
     <Route path='/' element={<SimpleContainer shorturl={shorturl} setshorturl={setshorturl} longurl={longurl} setlongurl={setlongurl}/>}/>
     <Route path="/totalclicks" element={<Count/>}/>
     <Route path="/shortener" element={<Shortened shorturl={shorturl} setshorturl={setshorturl} longurl={longurl} setlongurl={setlongurl}/>}/>
     <Route path="/error" element={<Error/>}/>
     <Route path="/count" element={<ClickCount/>}/>
     </Routes>
     <Bottombar/>
    </>
  );
}

export default App;
