import React from 'react';
import './App.sass';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
// import Products from './pages/Products';
import Customers from './pages/Customers';
import CustomerNew from './pages/CustomerNew';
import CustomerEdit from './pages/CustomerEdit';

//Redux

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
   <Router>
     <Provider store={store}>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/customers' component={Customers}  />
       <Route path='/customer/new' component={CustomerNew}  />
       <Route path='/customer/edit/:id' component={CustomerEdit}  />
       {/* <Route path='/products' component={Products}/> */}
       {/* <Route path='/product/new' component={ProductNew}/> */}
       {/* <Route path='/product/edit/:id' component={ProductEdit}/> */}
     </Switch>
     </Provider>
   </Router>
  );
}

export default App;
