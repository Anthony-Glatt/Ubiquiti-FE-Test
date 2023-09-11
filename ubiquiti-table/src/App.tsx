import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import TableNav from './components/tableNav/tableNav';
import Table from './components/table/table';
import { Device, TableDevice } from './interfaces/interfaces';

function App() {
  const [data, setData] = useState<TableDevice[]>([]);
  const [modTable, setModTable] = useState<TableDevice[]>([]);
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data.json')
    .then((r) => r.json())
    .then((json) => {
      const devices = json.devices;
      const tableData = devices.map((value: Device) => ({product: value.line.name, name: value.product.name, icon: value.icon}));
      const modData = tableData.map((value: TableDevice) => {
        const iconId = value.icon.id;
        const iconRes = value.icon.resolutions[0];
        const url = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${iconRes[0]}x${iconRes[1]}.png`;
        value.icon.url = url;
        return value;
      });
      setData(modData);
      setModTable(modData);
    });
  }, []);

  useEffect(() => {
    if (filterValue.length || searchBarValue !== '') {
      const filterRes = data.filter((device) => { return filterValue.indexOf(device.product) >= 0});
      const finalRes = filterRes.filter(device => device.name.includes(searchBarValue));
      setModTable(finalRes);
    } else {
      setModTable(data);
    }
  }, [searchBarValue, filterValue.length]);

  return (
    <div className="App">
      <Nav title="Devices" author="Anthony"/>
      <TableNav count={data.length} searchBarValue={setSearchBarValue} setFilterValue={setFilterValue} />
      <Table data={modTable}></Table>
    </div>
  );
}

export default App;
