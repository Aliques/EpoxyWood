/**/
import s from "./NewProducts.module.css";
import cl from "classnames";
import material from "../../public/Images/MaterialOverview.png";
import { ProductCard } from "./ProductCard";
export const NewProducts = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>New products</div>
      <div className={s.cards_container}>
        <div className={s.card_block}>
          <ProductCard />
        </div>
        <div className={s.card_block}>
          <ProductCard />
        </div>
        <div className={s.card_block}>
          <ProductCard />
        </div>
        <div className={s.card_block}>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
