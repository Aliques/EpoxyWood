import search from "../../Icons/24/search.svg";
import s from "./SearchField.module.css";
const SearchField = () => {
  return (
    <div className={s["search-box"]}>
      <button className={s["btn-search"]}>
        <img src={search} />
      </button>
      <input type="text" className={s["input-search"]} placeholder="Search" />
    </div>
  );
};

export default SearchField;
