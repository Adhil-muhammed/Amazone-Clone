import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { StateContext } from "../../Context/StateProvider";
import "./Header.css";
function Header() {
  const States = useContext(StateContext);
  console.log();
  return (
    <React.Fragment>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="oops"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello</span>
            <Link to="/Login">
              <span className="header__optionLineTwo">Guest</span>
            </Link>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/AddToCart" style={{ textDecoration: "none" }}>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {Object.keys(States.cartItems).length}
                {/* array object length finding  */}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
