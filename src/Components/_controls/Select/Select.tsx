import React, { ReactNode, useState, useRef } from "react";
import useOnClickOutside from "../../../Hooks/UseOnClickOutside";
import s from "./Select.module.css";
import sl from "classnames";
import { SelectContext } from "./SelectContext";

const Select: React.FC<{
  children: ReactNode | ReactNode[];
  defaultValue?: any;
  placeholder?: any;
}> = ({ children, defaultValue, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: any) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className={s.select_container} ref={selectContainerRef}>
        <div
          className={
            showDropdown ? sl(s.selected_text, s.active) : s.selected_text
          }
          onClick={showDropdownHandler}
        >
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
        </div>
        <ul
          className={
            showDropdown
              ? sl(s.select_options, s.show_dropdown_options)
              : sl(s.select_options, s.hide_dropdown_options)
          }
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
