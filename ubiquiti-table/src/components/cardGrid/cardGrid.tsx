import React from "react";
import './styles.scss';
import { CardGridProps } from "../../interfaces/interfaces";
import Card from "../card/card";

const CardGrid: React.FC<CardGridProps> = ({data, setDeviceId}) => {
  return (
    <div className="cardGrid">
       {data.map((val, key) => {
          return (
            <Card key={key} id={val.id} product={val.product} name={val.name}  shortName={val.shortName} icon={val.icon} setDeviceId={setDeviceId} />
          )
        })}
    </div>
  );
};

export default CardGrid;
