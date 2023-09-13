import React from "react";
import { useNavigate, Link } from "react-router-dom";
import './styles.scss';
import { DevicePageProps, TableDevice } from "../../interfaces/interfaces";

const DevicePage: React.FC<DevicePageProps> = ({data}) => {
  const navigate = useNavigate ();
  const queryString = window.location.href;
  const splitUrl = queryString.split('#/');
  const deviceId = splitUrl[1];
  const filtered = data.filter((val) => val.id === deviceId);
  const device = filtered.pop();

  const deviceIndex = data.findIndex((e) => e.id === deviceId);
  const rightDevice = data[deviceIndex + 1];
  const leftDevice = data[deviceIndex - 1];
  
  return (
    <div className="devicePage">
      <div className="device-nav">
        <button className="btn back-btn" onClick={() => navigate(-1)}>Back</button>
        { leftDevice !== undefined ?
          <Link to={`/${leftDevice.id}`} className="btn left-link"></Link>
          :
          <div className="btn left-btn"></div>
        }
        { rightDevice !== undefined ?
          <Link to={`/${rightDevice.id}`} className="btn right-link"></Link>
          :
          <div className="btn right-btn"></div>
        }
      </div>
      <div className="info-container">
        <img className="img" src={device?.icon.url257}/>
        <div className="info">
          <div className="name">{`${device?.name}`}</div>
          <div className="product">{`${device?.product}`}</div>
          <table className="device-table">
            <tbody>
              <tr>
                <th className="header">Product Line</th>
                <td className="value">{`${device?.product}`}</td>
              </tr>
              <tr>
                <th className="header">ID</th>
                <td className="value">{`${device?.id}`}</td>
              </tr>
              <tr>
                <th className="header">Name</th>
                <td className="value">{`${device?.name}`}</td>
              </tr>
              <tr>
                <th className="header">Short Name</th>
                <td className="value">{`${device?.shortName[0]}`}</td>
              </tr>
              <tr>
                <th className="header">Max. Power</th>
                <td className="value"></td>
              </tr>
              <tr>
                <th className="header">Speed</th>
                <td className="value"></td>
              </tr>
              <tr>
                <th className="header">Number of Ports</th>
                <td className="value"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <a
        className="json-link"
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(device)
        )}`}
        download={`${device?.name}.json`}
      >
        See All Details as JSON
      </a>
    </div>
  );
};

export default DevicePage;
