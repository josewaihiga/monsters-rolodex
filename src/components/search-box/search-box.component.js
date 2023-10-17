import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input 
    className={`search-box ${className}`} 
    type="search" placeholder={placeholder || "Search"} 
    onChange={onChangeHandler} 
  />
);

export default SearchBox;
