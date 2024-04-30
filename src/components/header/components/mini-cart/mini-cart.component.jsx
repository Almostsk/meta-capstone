import React from "react";
import { IconContext } from "react-icons";
import { MdShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";
import { ICON_COLOR } from "../../../../constants";
import "./styles.css";

const MiniCart = () => {
  return (
    <div
      id="mini-cart"
      data-testid="mini-cart"
      className="flex flex-col justify-center"
    >
      <Link to="/checkout" role="link" className="w-auto h-auto">
        <IconContext.Provider
          value={{ color: ICON_COLOR, size: "36px", className: "miniCartIco" }}
        >
          <div>
            <MdShoppingBasket />
          </div>
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default MiniCart;
