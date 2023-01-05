import s from "./RaitingStars.module.css";

interface RaitingStarsInterface {
    readonly:boolean,
    value:number
}

export const RaitingStars = (props:RaitingStarsInterface={readonly:false, value:0}) => {
  return (
    <div className={s.rating}>
        <input disabled={props.readonly} type="radio" id="star5" name="rating" value="5" checked={props.value==5}/>
        <label className={s.full}  htmlFor="star5" title="Awesome - 5 stars"></label>
        <input disabled={props.readonly} type="radio" id="star4half" name="rating" value="4 and a half" checked={props.value>4 && props.value<5}/>
        <label className={s.half} htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
        <input disabled={props.readonly} type="radio" id="star4" name="rating" value="4" checked={props.value==4}/>
        <label className={s.full} htmlFor="star4" title="Pretty good - 4 stars"></label>
        <input disabled={props.readonly} type="radio" id="star3half" name="rating" value="3 and a half" checked={props.value>3 && props.value<4}/>
        <label className={s.half} htmlFor="star3half" title="Meh - 3.5 stars"></label>
        <input disabled={props.readonly} type="radio" id="star3" name="rating" value="3" checked={props.value==3}/>
        <label className={s.full} htmlFor="star3" title="Meh - 3 stars"></label>
        <input disabled={props.readonly} type="radio" id="star2half" name="rating" value="2 and a half" checked={props.value>2 && props.value<3}/>
        <label className={s.half} htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
        <input disabled={props.readonly} type="radio" id="star2" name="rating" value="2" checked={props.value==2}/>
        <label className={s.full} htmlFor="star2" title="Kinda bad - 2 stars"></label>
        <input disabled={props.readonly} type="radio" id="star1half" name="rating" value="1 and a half" checked={props.value>1 && props.value<2}/>
        <label className={s.half} htmlFor="star1half" title="Meh - 1.5 stars"></label>
        <input disabled={props.readonly} type="radio" id="star1" name="rating" value="1" checked={props.value==1}/>
        <label className={s.full} htmlFor="star1" title="Sucks big time - 1 star"></label>
        <input disabled={props.readonly} type="radio" id="starhalf" name="rating" value="half" checked={props.value>0 && props.value<1}/>
        <label className={s.half} htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
    </div>
  );
};
