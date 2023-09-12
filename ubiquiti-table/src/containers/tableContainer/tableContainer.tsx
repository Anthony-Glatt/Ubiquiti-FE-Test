import React from "react";
import TableNav from "../../components/tableNav/tableNav";
import Table from "../../components/table/table";
import CardGrid from "../../components/cardGrid/cardGrid";
import { TableContainerProps } from "../../interfaces/interfaces";

const TableContainer: React.FC<TableContainerProps> = ({data, isTable, setSearchBarValue, setFilterValue, setIsTable, setDeviceId }) => {
  return (
    <div>
      <TableNav count={data.length} searchBarValue={setSearchBarValue} setFilterValue={setFilterValue} setIsTable={setIsTable} />
      {isTable ?
        <Table data={data} setDeviceId={setDeviceId} />
      :
        <CardGrid data={data} setDeviceId={setDeviceId} />
      }
    </div>
  )
}

export default TableContainer;
