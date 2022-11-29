import "./Select.css";
import { Dispatch, useRef, useState } from "react";
import useOnClickOutside from "../../Hooks/UseOnClickOutside";

interface SelectProps {
  data?: KeyValuePairInterface<number, string>[];
  defaultSelectedIndex?: number;
  setSelected: React.Dispatch<
    React.SetStateAction<KeyValuePairInterface<number, string>>
  >;
}
export const Select = ({
  data,
  defaultSelectedIndex = 0,
  setSelected,
}: SelectProps) => {
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

  function changeSelectedOption(
    args: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    let selectedValue = data?.find(
      (o) => o.value === args.currentTarget.innerText
    );

    setSelected(selectedValue || { key: 0, value: "" });
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
      {data != undefined && data.length > 0 ? (
        <ul className="menu" ref={refMenu}>
          {data?.map((o) => (
            <li onClick={(o) => changeSelectedOption(o)}>{o.value}</li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
