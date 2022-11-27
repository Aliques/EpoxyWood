import "./DropDown.css";
import cl from "classnames";
import { createRef, useEffect, useRef, useState } from "react";

interface SelectProps {
  data?: KeyValuePairInterface<number, string>[];
  defaultSelectedIndex?: number;
}
export const DropDown = ({ data, defaultSelectedIndex = 0 }: SelectProps) => {
  const refMenu = useRef<HTMLUListElement>(null);
  const refSelected = useRef<HTMLSpanElement>(null);
  const refCaret = useRef<HTMLDivElement>(null);
  const refSelect = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState(
    data != undefined ? data[defaultSelectedIndex].value : null
  );
  function selectClick() {
    var menu = refMenu.current;
    var caret = refCaret.current;
    var select = refSelect.current;
    if (select) {
      select.classList.toggle("select-clicked");
    }
    if (caret) {
      caret.classList.toggle("caret-rotate");
    }
    if (menu) {
      menu.classList.toggle("menu-open");
    }
  }

  function optionClick(args: React.MouseEvent<HTMLElement, MouseEvent>) {
    var selected = refSelected.current;
    var menu = refMenu.current;
    var caret = refCaret.current;
    var select = refSelect.current;

    if (select) {
      select.classList.remove("select-clicked");
    }
    if (caret) {
      caret.classList.remove("caret-rotate");
    }
    if (menu) {
      menu.childNodes.forEach((option) => {
        (option as HTMLLIElement).classList.remove("active");
      });
    }
    if (selected) {
      setSelectedText(args.currentTarget.innerText ?? "");
    }
    (args.target as HTMLLIElement).classList.add("active");
  }

  return (
    <div className="dropdown">
      <div ref={refSelect} className="select" onClick={selectClick}>
        <span ref={refSelected} className="selected">
          {selectedText}
        </span>
        <div className="caret"></div>
      </div>
      <ul className="menu" ref={refMenu}>
        {data?.map((o, i) => (
          <li onClick={(o) => optionClick(o)} key={o.key}>
            {o.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
