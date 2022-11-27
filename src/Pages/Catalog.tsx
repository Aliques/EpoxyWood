import s from "./Catalog.module.css";
import sl from "classnames";
import { ProductTypesSection } from "../Components/Home/ProductTypesSection";
import { ProductCard } from "../Components/_controls/ProductCard";
import RoundedButton from "../Components/_controls/RoundedButton";
import Select from "../Components/_controls/Select/Select";
import Option from "../Components/_controls/Select/Options";
import { DropDown } from "../Components/_controls/DropDown";
export const Catalog = () => {
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
  var totalCount: number = 423;

  return (
    <div className={s.container}>
      <div className={s.filter_container}>
        <div className={s.total_count}>({totalCount} products)</div>
        <div className={s.product_type}>
          <DropDown data={typeList} />
          {/* <Select defaultValue={typeList[0].value}>
            {typeList.map((o, i) => (
              <Option value={o.key}>{o.value}</Option>
            ))}
          </Select> */}
        </div>
      </div>
      <div className={s.catalog_container}>
        {list.map((o) => (
          <ProductCard key={o} />
        ))}
      </div>
      <div className={s.load_more_btn}>
        <RoundedButton width={195}>SHOW MORE</RoundedButton>
      </div>
    </div>
  );
};
