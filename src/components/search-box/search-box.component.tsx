import {ChangeEvent, ChangeEventHandler} from 'react'

import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => 
<input 
  className={`search-box ${className}`} 
  type="search" placeholder={placeholder || "Search"} 
  onChange={onChangeHandler} 
/>;

export default SearchBox;
