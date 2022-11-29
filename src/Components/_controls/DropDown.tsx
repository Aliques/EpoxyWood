import "./DropDown.css";
import { useRef, useState } from "react";
import useOnClickOutside from "../../Hooks/UseOnClickOutside";

interface SelectProps {
  data?: KeyValuePairInterface<number, string>[];
  defaultSelectedIndex?: number;
}
export const DropDown = ({ data, defaultSelectedIndex = 0 }: SelectProps) => {
  const refMenu = useRef<HTMLUListElement>(null);
  const refSelected = useRef<HTMLSpanElement>(null);
  const refCaret = useRef<HTMLDivElement>(null);
  const selectContainerRef = useRef(null);
  const clickOutsideHandler = () => {
    var menu = refMenu.current;
    var caret = refCaret.current;
    if (caret) {
      caret.classList.remove("active");
    }
    if (menu) {
      menu.classList.remove("menu-open");
    }
  };
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const [selectedText, setSelectedText] = useState(
    data != undefined ? data[defaultSelectedIndex].value : null
  );

  function selectClick() {
    var menu = refMenu.current;
    var caret = refCaret.current;
    if (caret) {
      caret.classList.toggle("active");
    }
    if (menu) {
      menu.classList.toggle("menu-open");
    }
  }

  function optionClick(args: React.MouseEvent<HTMLElement, MouseEvent>) {
    var selected = refSelected.current;
    var menu = refMenu.current;
    var caret = refCaret.current;

    if (caret) {
      caret.classList.remove("active");
    }
    if (menu) {
      menu.classList.remove("menu-open");
    }
    if (selected) {
      setSelectedText(args.currentTarget.innerText ?? "");
    }
  }

  return (
    <div ref={selectContainerRef} className="dropdown">
      <div className="select" onClick={selectClick}>
        <span ref={refSelected} className="selected">
          {selectedText}
        </span>
        <span ref={refCaret} className="arrow">
          <span></span>
          <span></span>
        </span>
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
