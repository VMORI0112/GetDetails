import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './js/components/Footer/Footer';
import Navbar from './js/components/Navbar/Navbar';

const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));

function App() {

  let tokenAuth = localStorage.getItem('token');
  // let userId = localStorage.getItem('userID');
  // let userEmail = localStorage.getItem('email');

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <Switch>
          {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
          {/* <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route render={() => <NotFound/>} /> */}
        </Switch>
        <Footer/>
      </Suspense>
    </Router> 
  );
}

export default App;
