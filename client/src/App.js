import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Dashboard from './components/StafferPages/Dashboard';
import DashboardInfo from './components/StafferPages/DashboardInfo';
import { useState } from 'react';
import ZipCode from './components/ConstituentsPages/ZipCode';
import InputInfo from './components/ConstituentsPages/InputInfo';
import Confirmation from './components/ConstituentsPages/Confirmation';

function App() {

  const [userInfo, setUserInfo] = useState({});
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/zipcode" element={<ZipCode editInfo = {setUserInfo}/>}></Route>
          <Route path = "/inputinfo" element ={<InputInfo user = {userInfo} editInfo = {setUserInfo}/>}></Route>
          <Route path = "/confirmation" element={<Confirmation user = {userInfo}/>}></Route>
          <Route path = "/dashboard" element = {<Dashboard />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
