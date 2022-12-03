import s from "./Catalog.module.css";
import sl from "classnames";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import { ProductCard } from "../Components/_controls/ProductCard";
import RoundedButton from "../Components/_controls/RoundedButton";
import { Select } from "../Components/Select/Select";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
export const Catalog = () => {
  const [typeSelected, setTypeSelected] = useState<
    KeyValuePairInterface<number, string>
  >({ key: 0, value: "" });
  const [sortSelected, setSortSelected] = useState<
    KeyValuePairInterface<number, string>
  >({ key: 0, value: "" });
  //TODO: temporary data
  let list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let typeList: KeyValuePairInterface<number, string>[] = [
    { key: 0, value: "All" },
    { key: 1, value: "Table" },
    { key: 2, value: "Doors" },
    { key: 3, value: "Stairs" },
    { key: 4, value: "Lighting" },
    { key: 5, value: "Clock" },
    { key: 6, value: "Decor" },
  ];
  let sort: KeyValuePairInterface<number, string>[] = [
    { key: 0, value: "by popular" },
    { key: 1, value: "by cost" },
  ];
  var totalCount: number = 423;

  return (
    <div className={s.container}>
      <div className={s.filter_container}>
        <div className={s.total_count}>({totalCount} products)</div>
        <div className={s.filter_group}>
          <div className={s.product_type}>
            <Select
              setSelected={setTypeSelected}
              data={typeList}
              defaultSelectedIndex={0}
            />
          </div>
          <div className={s.product_type}>
            <Select
              data={sort}
              setSelected={setSortSelected}
              defaultSelectedIndex={0}
            />
          </div>
        </div>
      </div>
      <div className={s.catalog_container}>
        {list.map((o) => (
            <ProductCard id={o} key={o} />
        ))}
      </div>
      <div className={s.load_more_btn}>
        <RoundedButton width={195}>SHOW MORE</RoundedButton>
      </div>
    </div>
  );
};