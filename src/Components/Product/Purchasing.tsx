import s from "./Purchasing.module.css";
import sl from "classnames";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { RaitingStars } from "../_controls/RaitingStars";
import { DropCard } from "../_controls/DropCard";
import { Select } from "../Select/Select";

export const Purchasing = () => {
  const data: KeyValuePairInterface<number, string>[] = [
    { key: 1, value: "asd" },
    { key: 2, value: "qwe" },
    { key: 3, value: "zxc" },
  ];
  return (
    <div className={s.container}>
      <div className={s.title}>
        Eposy resin coffee table, Live Edge River table, C-table
      </div>
      <div className={s.raiting__container}>
        <RaitingStars readonly={true} value={0.5} />
        <div className={s.reviews__count}>(26 reviews)</div>
      </div>
      <ul className={s.short__description}>
        <li>
          <span>Handmade:</span>
        </li>
        <li>
          <span>Materials:</span>
        </li>
        <li>
          <DropCard title='Parameters'>
            <div>
              <div>qweqw</div>
              <div>qweqw</div>
              <div>qweqw</div>
              <div>qweqw asd asd asdasda sd as </div>
              <div>qweqw asdasd as</div>
              <div>qweqw asd asd as dasd</div>
            </div>
          </DropCard>
        </li>
        <li>
          <span>Materials:</span>
        </li>
      </ul>
    </div>
  );
};
