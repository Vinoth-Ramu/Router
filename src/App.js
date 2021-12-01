import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Dashboard from './Home';



export default function App() {
  return (
    
    <div>
      <BrowserRouter>

      
      <Link to="/"> Dashboard </Link> &nbsp;
      <Link to="/aboutus"> About Us </Link> &nbsp;
      <Link to="/contactus"> Contact Us </Link> &nbsp;
      <Link to="/user"> User </Link> &nbsp;
    
      
      <Route exact Path="/"  component={() => <Dashboard/>} />
      <Route exact Path="/aboutus"  component={AboutUs} />
      <Route exact Path="/contactus"  component={ContactUs} />
      <Route exact Path="/user"  component={User} />

      </BrowserRouter>
      
    </div>
  );
}

 


function AboutUs(){
  return  <h3>AboutUsComponent</h3>;
}


function ContactUs(){
  return <h3>ContactUsComponent</h3>;

}

function User(){
  return <h3>UserComponent</h3>;

}














