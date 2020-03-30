import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/Others/logo2.png';
import { Link, withRouter } from 'react-router-dom';
import { UserContext } from '../auth/useAuth';



const LoginUser = ({route}) => {
    const {logout} = useContext(UserContext)
    const logOutHandler = () => {
        logout()
        route.history.push('/login')        
    }
    return (
        <>
            <Link to="/user/profile"><button className="nav-item btn btn-danger" href="/" >Profile</button></Link>
            <button className="nav-item btn btn-dark" href="/" onClick={logOutHandler}>Logout</button>
        </>
    )
}
const LogoutUser = () => {
    return (
        <>
            <Link to="/login"><button className="nav-item btn btn-primary" href="/">Login</button></Link>
            <Link to="/signup"><button className="nav-item btn btn-danger" href="/">Sign up</button></Link>
           
        </>
    )
}

const Header = (props) => {
    const {user, cart} = useContext(UserContext)
    const [cartItem, setCartItem] = useState('')
    useEffect(()=>{
        if(cart.length > 0 ) {
            setCartItem(cart.length)
        } else {
            setCartItem('')
        }

        
    }, [cart])

    return (
        <header>

        <nav className="navbar justify-content-md-between">
                <Link to="/"><img className="navbar-brand" src={logo} alt="fire onion" /></Link>
            
            <div className="navbar-nav flex-row">                  
                <Link to="/cart">  
                <button className="nav-item" href="/"> 
                <i className="fa fa-cart-plus" area-hidden="true">
                </i> <span style={{color:'red'}}> {cart && cartItem}</span>
                </button></Link>
                {user ? <LoginUser route={props} /> : <LogoutUser/>}    
            </div>
        </nav>
           
        </header>
    );
};

export default withRouter(Header);