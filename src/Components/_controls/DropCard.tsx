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
      <input type='checkbox' className={s.flag} ref={flagRef} />
      <label
        className={s.title__container}
        onClick={() => toggle(!open)}
        onKeyDown={() => toggle(!open)}
      >
        <div className={s.title}>{title}</div>
        <span className={s.arrow}>
          <span></span>
          <span></span>
        </span>
      </label>
      <div className={s.content}>{children}</div>
    </div>
  );
};
