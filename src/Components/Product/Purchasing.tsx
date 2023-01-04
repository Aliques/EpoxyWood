import s from "./Purchasing.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RaitingStars } from "../_controls/RaitingStars";
export const Purchasing = () => {
    return (
        <div>
            <div className={s.title}>
                Eposy resin coffee table, Live Edge River table, C-table 
            </div>
            <div>
            <RaitingStars readonly={true} value={3.5}/>
            </div>
        </div>
    );
};
