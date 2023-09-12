import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';
import { TableProps } from "../../interfaces/interfaces";


const DeviceTable: React.FC<TableProps> = ({data}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="header-product" scope="col">Product Line</th>
          <th className="header-name" scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            <tr className="row" key={key}>
              <td className="product-cell">
                <img className="product-icon" src={val.icon.url25} alt='Product Icon'/>
                <Link to={`/${val.id}`} style={{ textDecoration: 'none', color: 'inherit'  }}>
                  {val.product}
                </Link>
              </td>
              <td className="name-cell">
                <Link to={`/${val.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {val.name}
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default DeviceTable;
