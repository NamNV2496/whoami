import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Whoami from './components/pages/Whoami';
import Footer from './components/Footer';
import PostItem from './components/PostItem';
import Sidebar from './components/navBar/Sidebar'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        {/* <Sidebar /> */}
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/whoami' component={Whoami} />
          <Route path='/PostItem' component={PostItem} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
