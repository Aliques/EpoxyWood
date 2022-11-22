/**/
import s from "./ProductsPreviewTile.module.css";
import cl from "classnames";
import { ProductCard } from "../_controls/ProductCard";
import RoundedButton from "../_controls/RoundedButton";
export const ProductsPreviewTile = () => {
  return (
    <div className={s.container}>
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
      <div className={s.more}>
        <RoundedButton width={220}>SHOW MORE</RoundedButton>
      </div>
    </div>
  );
};
