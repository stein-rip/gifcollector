import Gif from "../models/Gif";
import Card from "./Card";
import "./CardList.css";

interface Props {
  gifArrayProp: Gif[];
}

const CardList = ({ gifArrayProp }: Props) => {
  return (
    <div className="CardList">
      <h2>Results</h2>
      <ul>
        {gifArrayProp.map((item) => (
          <Card gifProp={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default CardList;
