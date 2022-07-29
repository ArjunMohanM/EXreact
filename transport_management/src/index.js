import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css'
import Teacher from "./components/Teacher"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Parent from './components/Parent';
import Home from './components/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(




  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/parent" component={Parent} />
      <Route exact path="/teacher" component={Teacher} />
    </Switch>

  </BrowserRouter>
);
reportWebVitals();
