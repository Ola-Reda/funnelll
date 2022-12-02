import { Fragment } from 'react';
import './App.css';
import Home from './component/Home.js/Home';
import Navs from './component/navs/Navs';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login'



function App() {
  return (
    <Fragment>
    <Navs/>
    <Home></Home>
    <Login/>
    <Footer/>
    </Fragment>
  );
}

export default App;
