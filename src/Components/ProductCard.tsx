import s from "./ProductCard.module.css";
import cl from "classnames";
import cart from "../Icons/24/cart.svg";
import material from "../../public/Images/MaterialOverview.png";
import defaultImg from "./Temp/DefaultImage.jpg";
export const ProductCard = () => {
  var description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

  /*Обрезаем строку описания */
  function CutDescription(str: string): String {
    return str.substring(0, 35).concat(" ...");
  }
  return (
    <div className={s.container}>
      <div className={s.img_container}>
        <img className={s.product_image} src={defaultImg} alt="#" />
      </div>
      <div className={s.description}>{CutDescription(description)}</div>
      <div className={s.action}>
        <div className={s.cost_container}>
          <div className={s.currency}>USD</div>
          <div className={s.cost}>1231</div>
        </div>
        <div>
          <div className={s.icon_border}>
            <img src={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};
