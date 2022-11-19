/**/
import s from "./MaterialsDescription.module.css";
import cl from "classnames";
import material from "../../public/Images/MaterialOverview.png";
import { ProductCard } from "./ProductCard";
export const NewProducts = () => {
  return (
    <div>
      <div>New products</div>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
