import { CSSProperties, ReactChild, ReactNode, useState } from "react";
import s from "./RoundedButton.module.css";
import cl from "classnames";
interface BtnProps {
  isFill?: boolean;
  children?: ReactNode;
  height?: number;
  width?: number;
}

const RoundedButton = ({
  children,
  height = 30,
  width = 150,
  isFill = false,
}: BtnProps) => {
  return (
    <div style={{ display: "inline-block" }}>
      {isFill ? (
        <button
          style={{ height, width, borderRadius: height / 2 }}
          className={cl(s.btn, s.filled)}
        >
          {children}
        </button>
      ) : (
        <button
          style={{ height, width, borderRadius: height / 2 }}
          className={cl(s.btn, s.unfilled)}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default RoundedButton;
