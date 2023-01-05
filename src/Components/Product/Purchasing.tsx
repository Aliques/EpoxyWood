import s from "./Purchasing.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RaitingStars } from "../_controls/RaitingStars";
export const Purchasing = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Eposy resin coffee table, Live Edge River table, C-table 
            </div>
            <div className={s.raiting__container}>
                <RaitingStars readonly={true} value={0.5}/>
                <div className={s.reviews__count}>(26 reviews)</div>
            </div>
            <ul className={s.short__description}>
                <li><span>Handmade:</span></li>
                <li><span>Materials:</span></li>
                <li><span>Parameters</span></li>
            </ul>
        </div>
    );
};
