import { Link, Outlet } from "react-router-dom";
import { Footer } from "./_controls/Footer";
import { Navigation } from "./_controls/Navigation";
import s from "./Layout.module.css";
export const Layout = () => {
  return (
    <div className={s.container}>
      <div className={s.content_container}>
        <Navigation />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
