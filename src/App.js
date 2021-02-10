import React from 'react'
import './App.css';
import Header from './components/header/header'
import MainPage from './pages/main.page/mainPage'
import BasketPage from './pages/main.page/basket-page/basketPage.jsx/basketPage';
import {BrowserRouter as Router, Switch , Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
   
      <Header/>
  
     <Switch>
       <Route exact path="/">

       <MainPage/>
      </Route>

      <Route exact path="/basket">
      <BasketPage/>
      </Route>

      <Route exact path="/category">

      </Route>
      <Redirect to={'/'}/> 
      {/*< Route path="*" > */}
      </Switch>

       </div>
      
      </Router>
     
  );
}

export default App;
