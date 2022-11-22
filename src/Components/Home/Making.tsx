import s from "./Making.module.css";
import cl from "classnames";
import RoundedButton from "../_controls/RoundedButton";
import firstImg from "../../Temp/MakingDescriptionImg_1.jpg";
export const Making = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>How to make an order</div>
      <div className={s.makeing_container}>
        <div className={s.description_container}>
          <div className={s.description_text}>
            <div className={s.decription_point}>
              <span className={s.number}>1</span>
              <div className={s.description}>
                Disscussion of design;
                <br />
                payment 30%;
                <br />
                selection of wood, resin color, legs and coating.
              </div>
            </div>
            <div className={s.decription_point}>
              <div className={s.number}>2</div>
              <div className={s.description}>
                We will make an approximate calculation of the cost of the order
                based on your details and taking into account your wishes.
              </div>
            </div>
            <div className={s.decription_point}>
              <div className={s.number}>3</div>
              <div className={s.description}>
                We conclude a contract with you to assure you of our
                profesionalism.
              </div>
            </div>
          </div>
          <img src={firstImg} alt="#" />
        </div>
        <div className={s.description_container}>
          <img src={firstImg} alt="#" />
          <div className={s.description_text}>
            <div className={s.decription_point}>
              <div className={s.number}>4</div>
              <div className={s.description}>
                For the product to be made, we select the wood, which then
                passes through various stages of preparation and procesing.
              </div>
            </div>
            <div className={s.decription_point}>
              <div className={s.number}>5</div>
              <div className={s.description}>
                The final stage is transportation and payment for the work
                performed under the contract.
              </div>
            </div>
            <div className={s.design}>
              <RoundedButton width={160} height={40}>
                Design your table
              </RoundedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
