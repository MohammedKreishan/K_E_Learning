import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useContext, createContext } from "react";
import NavBar from "./components/NavBar/index";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Signout from "./components/Login/Logout"
import Dashboard from "./components/Dashboard/Dashboard";
import AddCourse from "./components/Courses/Courses";
import Allcourses from "./components/Allcourses/Allcourses";
import MarketingAndBusiness from "./components/Categories/MarketingAndBusiness";
import ArtsAndPhotography from "./components/Categories/ArtsAndPhotography";
import PersonalFinanceAndEconomics from "./components/Categories/PersonalFinanceAndEconomics";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer"
import OneCourse from "./components/Courses/OneCourse"
import Categories from "./components/Categories/Categories"
import RandomCourse from "./components/Courses/RandomCourse";
import Admin from "./components/Admin/Admin";
import ContactUs  from "./ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import  FrequentQ from "./components/F&Q/FrequentQ";
export const userContext = createContext();

function App() {
  const [toggle, setToggle] = useState(true);
  const [role, setRole] = useState("")
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  
  return (
    <userContext.Provider value={{ toggle, setToggle, token, setToken,role,setRole }}>

      <div className="App">

        <NavBar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/users/signOut" element={<Signout />} />
          <Route path="/users/contactUs" element={<ContactUs />} />
          <Route path="/users/aboutUs" element={<AboutUs />} />
          <Route path="/users/frequentq" element={<FrequentQ />} />




          <Route path="/users/dashboard" element={<Dashboard />} />
          <Route path="/users/allcourses" element={<Allcourses />} />
          <Route path="/users/onecourse/:courseId" element={<OneCourse />} />
          <Route path="/users/onecourse/randomcourse" element={<RandomCourse />} />
          <Route path="/users/admin" element={<Admin />} />



          <Route path="/users/categories" element={<Categories />} />
          <Route
            path="/categories/marketingAndBusiness"
            element={<MarketingAndBusiness />}
          />
          <Route
            path="/categories/artsAndPhotography"
            element={<ArtsAndPhotography />}
          />
          <Route
            path="/categories/personalFinanceAndEconomics"
            element={<PersonalFinanceAndEconomics />}
          />
        </Routes>
        <Footer/>
      </div>
    </userContext.Provider>
  );
}

export default App;
