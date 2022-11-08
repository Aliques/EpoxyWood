import globe from "../Icons/24/earthglobe.svg";
import scales from "../Icons/24/scales.svg";
import cart from "../Icons/24/cart.svg";
import user from "../Icons/24/user.svg";
import search from "../Icons/24/search.svg";
import menu from "../Icons/24/menu.svg";
import "./Navigation.css";
export const Navigation = () => {
  return (
    <div className="header-navigation-container">
      <div className="menu">
        <img src={menu} />
      </div>
      <div className="navigation-item logo">
        EPOXY
        <br />
        HOUSE
      </div>
      <div className="navigation-item">
        <ul className="menu-list">
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
        <div className="search-container">
          <input className="search__input" type="search" placeholder="Search" />
          <span>
            <img src={search} />
          </span>
        </div>
      </div>
      <div className="navigation-item">
        <span className={"navigation-icons"}>
          <img src={globe} />
        </span>
        <span className={"navigation-icons"}>
          <img src={user} />
        </span>
        <span className={"navigation-icons"}>
          <img src={scales} />
        </span>
        <span className={"navigation-icons"}>
          <img src={cart} />
        </span>
      </div>
    </div>
  );
};
