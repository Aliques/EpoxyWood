import s from "./Catalog.module.css";
import sl from "classnames";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import { ProductCard } from "../Components/_controls/ProductCard";
import RoundedButton from "../Components/_controls/RoundedButton";
export const Catalog = () => {
  //TODO: temporary data
  let list: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let typeList: { id: number; title: string }[] = [
    { id: 0, title: "Table" },
    { id: 1, title: "Doors" },
    { id: 2, title: "Stairs" },
    { id: 3, title: "Lighting" },
    { id: 4, title: "Clock" },
    { id: 5, title: "Decor" },
  ];
  var totalCount: number = 423;

  return (
    <div className={s.container}>
      <div className={s.filter_container}>
        <div className={s.total_count}>({totalCount} products)</div>
        <div>
          <select>
            {typeList.map((o) => (
              <option value={o.id}>{o.title}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={s.catalog_container}>
        {list.map(() => (
          <ProductCard />
        ))}
      </div>
      <div className={s.load_more_btn}>
        <RoundedButton width={195}>SHOW MORE</RoundedButton>
      </div>
    </div>
  );
};
