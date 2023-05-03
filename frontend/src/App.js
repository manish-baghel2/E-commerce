import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Router, Route} from "react-router-dom";
import WebFont from 'webfontloader';
import React, {useEffect} from 'react';
import Footer from  "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js"

// React.useEffect(()=>{

//   WebFont.load({
//     google:{
//       families:["Roboto","Droid Sans", "Chilanka"]
//     }
//   })
// },[])


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={Home}></Route>
      <Footer/>
    </Router>
    // comment added
  );
}

export default App;
