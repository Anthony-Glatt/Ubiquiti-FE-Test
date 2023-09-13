import React from "react";
import { Link } from 'react-router-dom';
import './styles.scss';
import { CardProps } from "../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({id, product, name, shortName, icon}) => {
  return (
    <div className="card">
      <Link to={`/${id}`} style={{ textDecoration: 'none', color: 'inherit'  }}>
        <div className="image-container">
          <img className="image" src={icon.url129} alt='device' />
          <div className="product">{product}</div>
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
