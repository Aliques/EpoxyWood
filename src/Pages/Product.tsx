import s from "./Product.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
export const Product = () => {
  const { id } = useParams();
  return <div className={s.container}>{id}</div>;
};
