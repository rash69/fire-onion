import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/Page/HomePage';
import SignUp from '../src/components/auth/SignUp/SignUp'
import Login from '../src/components/auth/Login/Login'
import Cart from './components/Cart/Cart';
import NotFound from './components/Page/NotFound';
import ItemDetails from './components/ItemDetails/ItemDetails';
import { UserProvider } from './components/auth/useAuth';
import UserProfile from './components/Page/UserProfile';
import PrivateRoute from './components/PrivateRoute';
import Checkout from './components/Cart/Checkout';
import Menu from './components/Menu/Menu';

function App() {
  return (
   <UserProvider>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={SignUp} />  
      <Route path="/login" component={Login} />
      <PrivateRoute path="/cart">
            <Cart />
      </PrivateRoute>
      <PrivateRoute path="/checkout">
            <Checkout />
      </PrivateRoute>
      <Route exact path="/menu/" component={Menu} />
      <Route path="/menu/:key" component={ItemDetails} />
      <PrivateRoute path="/user/profile">
            <UserProfile />
      </PrivateRoute>
      <Route path="*" component={NotFound} />
    </Switch>
   </UserProvider>
  );
}

export default App;