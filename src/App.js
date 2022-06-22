import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise =loadStripe('pk_test_51HXOAJHtRE2uExnXJfKfacxkbpf9eqCO0kDYXVumvDg2Zf2wBjJYrudH6RHslp3C8ffUTVfZLH6OhsMuPsEQkL3500U0toj3AU');

function App() {
  const [{},dispatch]=useStateValue();
 
  useEffect(()=>{
      //will only run once when the app comoponent load(Dynamic if statement)
      auth.onAuthStateChanged(authUser => {
        console.log('User is >> ',authUser);
        if(authUser)
        {
            //user in login
          dispatch({
          type:'SET_USER',
          user:authUser
          })
          }
        else{
          //else user is logout
        dispatch({
          type:'SET_USER',
          user:null
        })
        }
      })
    },[])
 
  return (
    <Router>
  <div className="app">
  
    <Switch>
      <Route path="/orders">
      <Header />
        <Orders />
      </Route>
        
      <Route path="/login">
        <Login />
      </Route>
        
    <Route path="/checkout">
    <Header />
     <Checkout/>
      </Route>
      <Route path="/payment">
    <Header />
     <Elements stripe={promise}>
    <Payment/>
    </Elements>
      </Route>
    
    <Route path="/">
    <Header />
      <Home/>
      </Route> 
     
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
