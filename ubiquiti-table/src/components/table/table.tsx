import React from "react";

interface TableDevice {
  product: string;
  name: string;
  icon: {
    id: string;
    resolutions: number[][];
    url: string;
  }
};

interface TableDeviceProps {
  data: TableDevice[];
}

const DeviceTable: React.FC<TableDeviceProps> = ({data}) => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Product Line</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.icon.url}{val.product}</td>
              <td>{val.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default DeviceTable;
