import React, { ReactNode } from "react";
import { useSelectContext } from "./SelectContext";
import s from "./Select.module.css";

const Option: React.FC<{
  children: ReactNode | ReactNode[];
  value: any;
}> = ({ children, value }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li className={s.select_option} onClick={() => changeSelectedOption(value)}>
      {children}
    </li>
  );
};

export default Option;
