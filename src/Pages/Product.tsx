import s from "./Product.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { TabsDesktop } from "../Components/Product/TabsDesktop";
import { Purchasing } from "../Components/Product/Purchasing";
export const Product = () => {
  const { id } = useParams();
  return (
    <div className={s.container}>
      <div className={s.description_container}>
        <div className={s.tabs_container}>
        <TabsDesktop />
        </div>
        <Purchasing />
      </div>
      <div className={s.order_container}></div>
    </div>
  );
};
