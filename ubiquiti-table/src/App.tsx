import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Table from './components/table/table';
import { tab } from '@testing-library/user-event/dist/tab';

function App() {
  type Device = {
    guids: string[];
    icon: {
      id: string;
      resolutions: number[][];
    };
    id: string;
    line: {
      id: string;
      name: string;
    };
    product: {
      abbrev: string;
      name: string;
    };
    shortnames: string[];
    sysids: [];
    triplets: [];
    uisp: {
      bleServices: {};
      firmware: {
        board: [];
        platform: null;
        line: string;
      };
      nameLegacy: [];
    }
  };

  interface TableDevice  {
    product: string;
    name: string;
    icon: {
      id: string;
      resolutions: number[][];
      url: string;
    }
  };

  const [data, setData] = useState<TableDevice[]>([]);

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

        return {...value, }
      });
      setData(modData);
    });
  }, []);
  return (
    <div className="App">
      <Nav title="Devices" author="Anthony"/>
      <Table data={data}></Table>
    </div>
  );
}

export default App;
