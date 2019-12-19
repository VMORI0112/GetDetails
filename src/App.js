import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import Footer from './js/components/Footer/Footer';
import Navbar from './js/components/Navbar/Navbar';

const NotFound = lazy(() => import('./js/views/NotFound/NotFound'));
const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));
const Register = lazy(() => import('./js/views/Register/Register'));
const Chat = lazy(() => import('./js/views/Chat/Chat'));

function App() {

  const [backen_url] = useState('https://get-details-backend.herokuapp.com');
  const [Auth, setAuth] = useState(null);

  let tokenAuth = localStorage.getItem('token');
  // let userId = localStorage.getItem('userID');
  // let userEmail = localStorage.getItem('email');
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  const providerValue = useMemo(() => ({ backen_url, Auth, setAuth, windowHeight }), [backen_url, Auth, setAuth, windowHeight]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar/>
            <section style={{minHeight: windowHeight}}>
              <Switch>
                {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/chat" component={Chat} />
                <Route render={() => <NotFound/>} />
              </Switch>
            </section>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router> 
  );
}

export default App;
