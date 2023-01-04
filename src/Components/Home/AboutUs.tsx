import s from "./AboutUs.module.css";
import cl from "classnames";
import aboutUsImg from "../../Temp/AbouUs.jpg";
import { ReactNode } from "react";

interface AboutUsProps {
  description?: string;
}

export const AboutUs = ({ description }: AboutUsProps) => {
  const str: string =
    "Epoxy House concept is a team of ambitious, enthusiastic people who are in love with their business. We are inspired by the natural beauty of wood, we admire the durability and versatility of metal, we are fascinated by the overflows of epoxy resin. Thanks to these three materials modernity is harmoniously combined with naturalness. Such tables, cabinets or bar counters become something bigger than ordinary interior items, they have soul.";
  description = str;
  return (
    <div className={s.container}>
      <div className={s.title}>About us</div>
      <div>
        <img className={s.img} src={aboutUsImg} alt="#" />
        {description != undefined ? (
        <div className={s.description}>{description}</div>
      ) : (
        <></>
      )}
      </div>
      
    </div>
  );
};
