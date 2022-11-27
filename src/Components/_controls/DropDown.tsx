import s from "./DropDown.module.css";
import cl from "classnames";
import { useEffect, useRef } from "react";

interface SelectProps {
  data?: KeyValuePairInterface<number, string>[];
  defaultSelectedIndex?: number;
}
export const DropDown = ({ data, defaultSelectedIndex }: SelectProps) => {
  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");
    console.log(dropdowns);

    dropdowns.forEach((dropdown) => {
      console.log(1);

      const select = dropdown.querySelector(".select");
      const caret = dropdown.querySelector(".caret");
      const menu = dropdown.querySelector(".menu");
      const options = dropdown.querySelectorAll(
        "menu li"
      ) as NodeListOf<HTMLElement>;
      const selected = dropdown.querySelector(".selected") as HTMLElement;

      select?.addEventListener("click", () => {
        select.classList.toggle("select-clicked");
        caret?.classList.toggle("caret-rotate");
        menu?.classList.toggle("menu-open");
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          selected.innerText = option.innerText;
          select?.classList.remove("select-clicked");
          caret?.classList.remove("caret-rotate");
          menu?.classList.remove("menu-open");
          options.forEach((option) => {
            option.classList.remove("active");
          });
          option.classList.add("active");
        });
      });
    });
  }, []);
  return (
    <div className={s.dropdown}>
      <div className={s.select}>
        <span className={s.selected}></span>
        <div className={s.caret}></div>
      </div>
      <ul className={s.menu}>
        {data?.map((o, i) => (
          <li key={o.key}>{o.value}</li>
        ))}
      </ul>
    </div>
  );
};
