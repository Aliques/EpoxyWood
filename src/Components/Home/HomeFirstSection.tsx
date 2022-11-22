import s from "./HomeFirstSection.module.css";
import cl from "classnames";
import RoundedButton from "../_controls/RoundedButton";
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
          <div className={s.catalog_btn}>
            <RoundedButton width={180} height={40} isFill={true}>
              OPEN CATALOG
            </RoundedButton>
          </div>
          <RoundedButton width={180} height={40} isFill={false}>
            DESIGN YOUR TABLE
          </RoundedButton>
        </div>
      </div>
    </section>
  );
};
