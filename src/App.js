import React from 'react';
import './App.css';
import Person from './pages/clientes';
import Animals from './pages/animales';
import Login from './pages/login';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/personas" component={Person}/>
        <Route exact path="/animales" component={Animals}/>
      </Switch>
    </BrowserRouter>
   
    
  );
}

export default App;
