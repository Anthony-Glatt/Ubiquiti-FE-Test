import React,  {useState, useEffect } from "react";
import './styles.scss';
import { TableNavProps } from "../../interfaces/interfaces";
import SearchBar from "../searchBar/searchBar";
import Filter from "../filter/filter";


const TableNav: React.FC<TableNavProps> = ({count, searchBarValue, setFilterValue}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchValue(e.target.value)
  };
  
  useEffect(() => {
    searchBarValue(searchValue);
  }, [searchValue]);

  return (
    <div className="tableNav">
      <SearchBar searchValue={searchValue} handleChange={handleChange}/>
      <div className="device-count">{count} Devices</div>
      <div className="tools">
        <img src="/table-default.png" />
        <img src="/grid-default.png" />
        <Filter setFilterValue={setFilterValue} />
      </div>
    </div>
  );
};

export default TableNav;
