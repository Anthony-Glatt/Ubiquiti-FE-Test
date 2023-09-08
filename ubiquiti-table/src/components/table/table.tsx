import React from "react";
import { TableDeviceProps } from "../../interfaces/interfaces";

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
              <td>
                <img src={val.icon.url} alt='Product Icon'/>
                {val.product}
              </td>
              <td>{val.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default DeviceTable;
