import s from "./HomeFirstSection.module.css";
import cl from "classnames";
export const HomeFirstSection = () => {
  return (
    <section className={s["greeting-section"]}>
      <div className={s.title_container}>
        <div className={s.title}>EPOXY FURNITURE</div>
        <div className={s.subtitle}>
          Designer furniture and decore made
          <br /> of wood and epoxy resin.
        </div>
        <div className={s.navigation_btns}>
          <button className={cl(s.navigation_btn, s.catalog_btn)}>
            OPEN CATALOG
          </button>
          <button className={s.navigation_btn}>DESIGN YOUR TABLE</button>
        </div>
      </div>
    </section>
  );
};
