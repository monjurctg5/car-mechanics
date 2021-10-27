import './App.css';
import Home from './Pages/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Header from './Pages/shared/Header/Header';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact  path= "/">
          <Home></Home>
          </Route>
          <Route   path= "/home">
          <Home></Home>
          </Route>
          <PrivateRoute   path= "/booking/:bookingId">
          <Booking></Booking>
          </PrivateRoute>
          <Route path = "/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>

      
    </div>
  );
}

export default App;
