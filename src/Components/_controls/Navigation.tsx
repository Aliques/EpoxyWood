import globe from "../../Icons/24/earthglobe.svg";
import scales from "../../Icons/24/scales.svg";
import cart from "../../Icons/24/cart.svg";
import user from "../../Icons/24/user.svg";
import SearchField from "./SearchField";
import s from "./Navigation.module.css";
import cl from "classnames";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export const Navigation = () => {
  const ref = useRef<HTMLDivElement>(null);
  window.addEventListener("scroll", function () {
    if (ref.current != null) {
      ref.current.style.opacity = this.window.scrollY < 50 ? "0" : "1";
    }
  });
  return (
    <div>
      <div className={s.nav_bg} ref={ref}></div>
      <nav className={s.navbar}>
        <div className={s["navbar-container"]}>
          <div className={cl(s["navigation-item"],s.logo_container)}>
            <Link to="/" className={s.logo}>
              EPOXY
              <br />
              HOUSE
            </Link>
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
                  <Link to="/catalog">CATALOG</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/contacts">CONTACTS</Link>
                </li>
              </ul>
            </div>
            <div className={s.search}>
              <SearchField />
            </div>
            <div className={s["nav-icon__container"]}>
              <div className={s.icon_group}>
                <div className={s["navigation-icons"]}>
                  <img src={globe} />
                </div>
                <div className={s["navigation-icons"]}>
                  <img src={user} />
                </div>
              </div>
              <div className={s.icon_group}>
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
    </div>
  );
};
