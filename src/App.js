
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Login from "./Pages/Login";
import Paypal from "./Pages/Paypal";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/UserSlice";
import Footer from "./components/Footer";


function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const auth = getAuth();
   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout);
      }
    })
return unsubscribe;
  }, [dispatch])
  return (
    <div className="root">
     
      { <Router>
        
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/checkout" element={<Paypal />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
       
      </Router> }
      <Footer></Footer>
    </div>
  );
}

export default App;

