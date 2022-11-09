import search from "../../Icons/24/search.svg";
import "./SearchField.css";
const SearchField = () => {
  return (
    <div className="search-box">
      <button className="btn-search">
        <img src={search} />
      </button>
      <input type="text" className="input-search" placeholder="Search" />
    </div>
  );
};

export default SearchField;
