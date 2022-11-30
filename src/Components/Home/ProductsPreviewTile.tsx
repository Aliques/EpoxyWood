/**/
import s from "./ProductsPreviewTile.module.css";
import cl from "classnames";
import { ProductCard } from "../_controls/ProductCard";
import RoundedButton from "../_controls/RoundedButton";
export const ProductsPreviewTile = () => {
  let list: number[] = [1, 1, 1, 1];
  return (
    <div className={s.container}>
      <div className={s.cards_container}>
        {list.map(() => (
          <div className={s.card_block}>
            <a href="#product">
              <ProductCard />
            </a>
          </div>
        ))}
      </div>
      <div className={s.more}>
        <RoundedButton width={220}>SHOW MORE</RoundedButton>
      </div>
    </div>
  );
};
