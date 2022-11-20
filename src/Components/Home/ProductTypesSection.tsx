import s from "./ProductTypesSection.module.css";
import defaultImg from "../../Temp/DefaultImage.jpg";
export const ProductTypesSection = () => {
  return (
    <div className={s.container}>
      <div className={s.row}>
        <div>
          <img src={defaultImg} />
          <div>TABLES</div>
        </div>
        <div>
          <img src={defaultImg} />
          <div>DOORS</div>
        </div>
        <div>
          <img src={defaultImg} />
          <div>STAIRS</div>
        </div>
      </div>
      <div className={s.row}>
        <div>
          <img src={defaultImg} />
          <div>LIGHTING</div>
        </div>
        <div>
          <img src={defaultImg} />
          <div>CLOCK</div>
        </div>
        <div>
          <img src={defaultImg} />
          <div>DECOR</div>
        </div>
      </div>
    </div>
  );
};
