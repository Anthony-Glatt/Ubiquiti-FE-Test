import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';
import { CardProps } from "../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({id, product, name, shortName, icon, setDeviceId}) => {
  return (
    <div className="card">
      <Link to="device" style={{ textDecoration: 'none', color: 'inherit'  }} onClick={() => {setDeviceId(id)}}>
        <div className="image-container">
          <img className="image" src={icon.url129}></img>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="shortName">{shortName.length > 1 ? shortName.join(' ') : shortName[0]}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
