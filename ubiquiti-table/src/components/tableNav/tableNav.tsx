import React,  {useState, useEffect } from "react";
import './styles.scss';
import { TableNavProps } from "../../interfaces/interfaces";
import SearchBar from "../searchBar/searchBar";
import Filter from "../filter/filter";


const TableNav: React.FC<TableNavProps> = ({count, setSearchBarValue, setFilterValue, setIsTable}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchValue(e.target.value)
  };
  
  useEffect(() => {
    setSearchBarValue(searchValue);
  }, [searchValue]);

  return (
    <div className="tableNav">
      <SearchBar searchValue={searchValue} handleChange={handleChange}/>
      <div className="device-count">{count} Devices</div>
      <div className="table-icon" onClick={() => setIsTable(true)} />
      <div className="card-icon" onClick={() => setIsTable(false)} />
      <Filter setFilterValue={setFilterValue} />
    </div>
  );
};

export default TableNav;
