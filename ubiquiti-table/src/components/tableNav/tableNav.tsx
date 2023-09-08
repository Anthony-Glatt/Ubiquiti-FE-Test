import React, {useState} from "react";
import './styles.scss';
import { TableNavProps } from "../../interfaces/interfaces";
import SearchBar from "../searchBar/searchBar";


const TableNav: React.FC<TableNavProps> = ({count}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="tableNav">
      <SearchBar searchValue={searchValue} handleChange={handleChange}/>
      <div className="device-count">{count} Devices</div>
      <div className="tools">
        <img src="/table-default.png" />
        <img src="/grid-default.png" />
        <button>Filter</button>
      </div>
    </div>
  );
};

export default TableNav;
