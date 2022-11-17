import { HomeFirstSection } from "../Components/HomeFirstSection";
import s from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <HomeFirstSection />
      <section className={s["product-overview__container"]}>
        <h1>Other</h1>
      </section>
      <section></section>
    </div>
  );
};
