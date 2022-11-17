import globe from "../Icons/24/earthglobe.svg";
import scales from "../Icons/24/scales.svg";
import cart from "../Icons/24/cart.svg";
import user from "../Icons/24/user.svg";
import SearchField from "./Controls/SearchField";
import "./Navigation.css";
export const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navigation-item logo">
          EPOXY
          <br />
          HOUSE
        </div>
        <div className="navbar-links">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">CATALOG</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">CONTACTS</a>
            </li>
          </ul>
        </div>
        <div className="navigation-item">
          <SearchField />
          <div className="nav-icon__container">
            <div className={"navigation-icons"}>
              <img src={globe} />
            </div>
            <div className={"navigation-icons"}>
              <img src={user} />
            </div>
            <div className={"navigation-icons"}>
              <img src={scales} />
            </div>
            <div className={"navigation-icons"}>
              <img src={cart} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
