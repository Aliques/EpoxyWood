import s from "./ProductCard.module.css";
import cl from "classnames";
import cart from "../../Icons/24/cart.svg";
import defaultImg from "../../Temp/DefaultImage.jpg";
import { Link } from "react-router-dom";
interface ProductCardProps{
  id:number
}
export const ProductCard = ({id}:ProductCardProps) => {
  var description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  /*Обрезаем строку описания до 35 символов*/
  function CutDescription(str: string): String {
    return str.substring(0, 35).concat(" ...");
  }
  return (
    <div className={s.container}>
          <Link key={id} to={`/catalog/${id}`}>
      <div className={s.img_container}>
        <img className={s.product_image} src={defaultImg} alt="#" />
      </div>
      <div className={s.description}>{CutDescription(description)}</div>
      </Link>
      <div className={s.action}>
        <div className={s.cost_container}>
          <div className={s.currency}>USD</div>
          <div className={s.cost}>1231</div>
        </div>
        <div>
          <div className={s.icon_border}>
            <a href="#cart">
              <img src={cart} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
