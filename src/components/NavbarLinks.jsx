import { useState } from "react";
import { FeatureDropdownMenu, CompanyDropdownMenu } from "./DropdownMenu";

// Correcting the import paths to relative paths
import arrowUp from "../assets/icon-arrow-up.svg";
import arrowDown from "../assets/iconArrowDown.svg";

const NavbarLinks = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <ul className="navbar__links">
      <li className="navbar__item">
        <div className="dropdown">
          <a href="#" className="navbar__link" onClick={() => setOpen(!open)}>
            Features
          </a>

          {open ? (
            <img src={arrowUp} alt="Arrow Up" />
          ) : (
            <img src={arrowDown} alt="Arrow Down" />
          )}

          {open && <FeatureDropdownMenu />}
        </div>
      </li>

      <li className="navbar__item">
        <div className="dropdown">
          <a href="#" className="navbar__link" onClick={() => setOpen2(!open2)}>
            Company
          </a>

          {open2 ? (
            <img src={arrowUp} alt="Arrow Up" />
          ) : (
            <img src={arrowDown} alt="Arrow Down" />
          )}

          {open2 && <CompanyDropdownMenu />}
        </div>
      </li>

      <NavbarItems itemTitle={"Career"} />
      <NavbarItems itemTitle={"About"} />
    </ul>
  );
};

const NavbarItems = (props) => {
  return (
    <li className="navbar__item">
      <a href="#" className="navbar__link">
        {props.itemTitle}
      </a>
    </li>
  );
};

const NavbarAuth = () => {
  return (
    <div className="navbar__auth">
      <a href="">
        <button className="login">Login</button>
      </a>
      <a href="">
        <button className="register">Register</button>
      </a>
    </div>
  );
};

export { NavbarLinks, NavbarAuth };
