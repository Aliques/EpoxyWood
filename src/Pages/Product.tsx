import s from "./Product.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { DescriptionTabs } from "../Components/Product/DescriptionTabs";
export const Product = () => {
  const { id } = useParams();
  return (
    <div className={s.container}>
      <div className={s.description_container}>
        <DescriptionTabs />
      </div>
      <div className={s.order_container}></div>
    </div>
  );
};
