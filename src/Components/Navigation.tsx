import globe from "../Icons/24/earthglobe.svg";
import scales from "../Icons/24/scales.svg";
import cart from "../Icons/24/cart.svg";
import user from "../Icons/24/user.svg";
import SearchField from "./Controls/SearchField";
import s from "./Navigation.module.css";
import cl from "classnames";
export const Navigation = () => {
  return (
    <nav className={s.navbar}>
      <div className={s["navbar-container"]}>
        <div className={cl(s["navigation-item"], s.logo)}>
          EPOXY
          <br />
          HOUSE
        </div>
        <div className={s["navbar-links__container"]}>
          <div className={s["navbar-links"]}>
            <input type="checkbox" />
            <div className={s["hamburger-lines"]}>
              <span className={cl(s.line, s.line1)}></span>
              <span className={cl(s.line, s.line2)}></span>
              <span className={cl(s.line, s.line3)}></span>
            </div>
            <div className={s.cover}></div>

            <ul className={s["menu-items"]}>
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
          <div className={s.search}>
            <SearchField />
          </div>
          <div className={s["nav-icon__container"]}>
            <div>
              <div className={s["navigation-icons"]}>
                <img src={globe} />
              </div>
              <div className={s["navigation-icons"]}>
                <img src={user} />
              </div>
            </div>
            <div>
              <div className={s["navigation-icons"]}>
                <img src={scales} />
              </div>
              <div className={s["navigation-icons"]}>
                <img src={cart} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
