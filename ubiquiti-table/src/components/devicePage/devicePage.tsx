import React from "react";
import { useNavigate  } from "react-router-dom";
import './styles.scss';
import { DevicePageProps } from "../../interfaces/interfaces";

const DevicePage: React.FC<DevicePageProps> = ({data, deviceId}) => {
  console.log(deviceId);
  const navigate = useNavigate ();
  const filteredDevice = data.filter((val) => val.id === deviceId);
  console.log('filteredDevice', filteredDevice);
  return (
    <div className="devicePage">
      <div className="nav">
        <button className="back-btn" onClick={() => navigate(-1)}>{`< Back`}</button>
        <button className="left-btn">{'<'}</button>
        <button className="right-btn">{'>'}</button>
      </div>
      <div className="info-container">
        {/* <img src={}/> */}
        <div className="info">
          <div>Product Line</div>
          <div>ID</div>
          <div>Name</div>
          <div>Short Name</div>
          <div>Max. Power</div>
          <div>Speed</div>
          <div>Number of Ports</div>
        </div>
      </div>
      <button>See All Details as JSON</button>
    </div>
  );
};

export default DevicePage;
