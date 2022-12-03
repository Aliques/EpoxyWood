import s from "./Product.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { TabsDesktop } from "../Components/Product/TabsDesktop";
export const Product = () => {
  const { id } = useParams();
  return (
    <div className={s.container}>
      <div className={s.description_container}>
        <TabsDesktop />
      </div>
      <div className={s.order_container}></div>
    </div>
  );
};
