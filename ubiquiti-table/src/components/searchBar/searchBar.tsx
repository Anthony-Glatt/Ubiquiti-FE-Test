import React from "react";
import './styles.scss';
import { SearchInputProps } from '../../interfaces/interfaces';

const SearchBar: React.FC<SearchInputProps> = ({searchValue, handleChange}) => {
  return (
    <div>
      <input
        className="searchBar"
        placeholder="Search"
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
    </div>
  )
};

export default SearchBar;
