import React from "react";
import TableNav from "../../components/tableNav/tableNav";
import Table from "../../components/table/table";
import CardGrid from "../../components/cardGrid/cardGrid";
import { TableContainerProps } from "../../interfaces/interfaces";

const TableContainer: React.FC<TableContainerProps> = ({ data, isTable, setSearchBarValue, setFilterValue, setIsTable }) => {
  return (
    <div>
      <TableNav count={data.length} setSearchBarValue={setSearchBarValue} setFilterValue={setFilterValue} setIsTable={setIsTable} />
      {isTable ?
        <Table data={data} />
      :
        <CardGrid data={data} />
      }
    </div>
  )
}

export default TableContainer;
