import s from "./HomeFirstSection.module.css";

export const HomeFirstSection = () => {
  return (
    <section className={s["greeting-section"]}>
      <div className={s.title_container}>
        <div className={s.title}>EPOXY FURNITURE</div>
        <div className={s.subtitle}>
          Designer furniture and decore made
          <br /> of wood and epoxy resin.
        </div>
      </div>
    </section>
  );
};
