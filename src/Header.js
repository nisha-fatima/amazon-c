import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase'



function Header() {
  const[{basket,user,email},dispatch]=useStateValue();
  
  const handleAuth=()=>{
      if(user){
        auth.signOut();
      }
  }
  return (
    <div className="header">
      <Link to="/">
      
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      </Link>
      
      
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon'/>

        {/* Logo */}
      </div>
      <div className="header__nav">
<Link to={!user && "/login"}>
        <div onClick={handleAuth} className="header__option">
          {/* user?.email || 'Hello guest' */}
  <span className="header__optionlineOne">Hello {!user ? ' Guest '  :  user.email   }</span>
  <span className="header__optionlineTwo">{user ? 'Sign Out' : 'Sign In '}</span>
        </div>
        </Link>
        <Link to ="/Orders">
        <div className="header__option">
          <span className="header__optionlineOne">Returns</span>
          <span className="header__optionlineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionlineOne">Your</span>
          <span className="header__optionlineTwo">Prime</span>
        </div>

        <div className='header__optionBasket'>
          <Link to="/checkout">
            <ShoppingBasketIcon className="s_basket"/>
            </Link>
  <span className='header__optionlineTwo header__basketCount'>{basket?.length}</span>
        </div>


      </div>
    </div>
  );
}

export default Header;
