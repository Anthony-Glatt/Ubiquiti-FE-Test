import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import TableContainer from './containers/tableContainer/tableContainer';
import { DeviceData, TableDevice } from './interfaces/interfaces';
import Layout from './containers/layout/layout';
import DevicePage from './components/devicePage/devicePage';

function App() {
  const [data, setData] = useState<TableDevice[]>([]);
  const [modTable, setModTable] = useState<TableDevice[]>([]);
  const [finalTable, setFinalTable] = useState<TableDevice[]>([]);
  const [searchBarValue, setSearchBarValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string[]>([]);
  const [isTable, setIsTable] = useState<boolean>(true);

  useEffect(() => {
    fetch('/data.json')
    .then((r) => r.json())
    .then((json) => {
      const devices = json.devices;
      const deviceData = devices.map((value: DeviceData) => ({id: value.id, product: value.line.name, name: value.product.name, shortName: value.shortnames, icon: value.icon}));
      const tableData = deviceData.map((value: TableDevice) => {
        const iconId = value.icon.id;
        const iconRes25 = value.icon.resolutions[0];
        const iconRes129 = value.icon.resolutions[3];
        const iconRes257 = value.icon.resolutions[4];
        const url25 = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${iconRes25[0]}x${iconRes25[1]}.png`;
        const url129 = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${iconRes129[0]}x${iconRes129[1]}.png`;
        const url257 = `https://static.ui.com/fingerprint/ui/icons/${iconId}_${iconRes257[0]}x${iconRes257[1]}.png`;
        value.icon.url25 = url25;
        value.icon.url129 = url129;
        value.icon.url257 = url257;
        return value;
      });
      setData(tableData);
      setModTable(tableData);
      setFinalTable(tableData);
    });
  }, []);

  useEffect(() => {
    if (filterValue.length) {
      const filteredTable = data.filter((device) => { return filterValue.indexOf(device.product) >= 0});
      setModTable(filteredTable);
      setFinalTable(filteredTable);
    } else {
      setModTable(data);
      setFinalTable(data);
    }
  }, [filterValue.length]);

  useEffect(() => {
      const searchedTable = modTable.filter(device => device.name.includes(searchBarValue));
      setFinalTable(searchedTable);
  }, [searchBarValue]);

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TableContainer data={finalTable} isTable={isTable} setSearchBarValue={setSearchBarValue} setFilterValue={setFilterValue} setIsTable={setIsTable} />} />
            <Route path="/:id" element={<DevicePage data={finalTable} />} />
          </Route>
          <Route path="*" element={<div>Turn around and never come back!</div>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
