import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { IconContext } from "react-icons";
import { MdMenu, MdClose } from "react-icons/md";
import { ICON_COLOR } from "../../../../constants";
import Logo from "../../../../assets/img/logo.jpg";
import "./styles.css";

const LINKS_DATA = [
  { label: "Home", url: "/" },
  { label: "Booking", url: "/checkout" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 ">
        <div className="flex items-center justify-between h-16 nav-container">
          <div className="flex items-center">
            <div className="flex-shrink-0 md:mr-4 md:ml-0 ml-4">
              <Link to="/" role="link">
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              {LINKS_DATA.map((link) => (
                <Link
                  role="link"
                  key={link.label}
                  to={link.url}
                  className="text-primary1 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex md:hidden order-1">
            <Button
              className="p-1 shadow-none border border-primary1 mr-2"
              onClick={toggleMenu}
              name="Menu"
              role="button"
            >
              <IconContext.Provider value={{ color: ICON_COLOR, size: "36px" }}>
                <div>{!isOpen ? <MdMenu /> : <MdClose />}</div>
              </IconContext.Provider>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-white pr-4 transition duration-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {LINKS_DATA.map((link) => (
              <Link
                role="link"
                key={link.label}
                to={link.url}
                className="text-primary1 hover:bg-gray-700 block rounded-md text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
