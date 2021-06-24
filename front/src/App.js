import React from 'react';
//Al

//Routes
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Components
import Header from './components/Header';


//Screens
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Favorites from './screens/Favorites';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/register' component={Register}  />
          <Route path='/favorites' component={Favorites}  />
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}
export default App;
