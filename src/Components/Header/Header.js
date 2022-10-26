import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'
function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="oops"
        />

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Guest</span>
          </div>

         
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
