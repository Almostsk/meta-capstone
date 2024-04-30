import React from "react";
import { Outlet } from "react-router-dom";
import MiniCart from "./components/mini-cart/mini-cart.component";
import Navigation from "./components/navigation/navigation.component";

const Header = () => {
  return (
    <>
      <header className="container flex justify-between py-2">
        <Navigation />
        <MiniCart />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
