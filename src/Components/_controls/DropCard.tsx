import { title } from "process";
import s from "./DropCard.module.css";
import { useRef, useState } from "react";
import useOnClickOutside from "../../Hooks/UseOnClickOutside";

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const DropCard = ({ children, title }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const flagRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const onClickOutside = useOnClickOutside(contentRef, () => {
    setOpen(false);
    toggle(false);
  });

  const toggle = (isOpen: boolean) => {
    setOpen(isOpen);
    flagRef.current!.checked = isOpen;
  };

  return (
    <div ref={contentRef} className={s.container}>
      <input className={s.flag} type='checkbox' ref={flagRef} />
      <div className={s.title__container}>
        <div
          className={s.title}
          onClick={(o) => toggle(!open)}
          onKeyDown={() => toggle(!open)}
        >
          {title}
        </div>
        <span
          className={s.arrow}
          onClick={(o) => toggle(!open)}
          onKeyDown={() => toggle(!open)}
        >
          <span></span>
          <span></span>
        </span>
      </div>
      {open! && (
        <div className={s.content}>
          <div
            className={s.title}
            onClick={(o) => toggle(!open)}
            onKeyDown={() => toggle(!open)}
          >
            {title}
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
