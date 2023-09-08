import React from "react";
import './styles.scss';
import { SearchInputProps } from '../../interfaces/interfaces';

const SearchBar: React.FC<SearchInputProps> = ({searchValue, handleChange}) => {
  return (
    <div className="searchBar">
      <input
        className="input"
        placeholder="Search"
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
    </div>
  )
};

export default SearchBar;
