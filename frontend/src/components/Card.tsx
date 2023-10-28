import Gif from "../models/Gif";
import "./Card.css";
import fourOhFour from "../assets/404.jpg";
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

interface Props {
  gifProp: Gif;
}

const Card = ({ gifProp }: Props) => {
  const { addFavoriteHandler, deleteFavoriteHandler, isFav } =
    useContext(FavoritesContext);
  const { user } = useContext(AuthContext);
  return (
    <li className="Card">
      <h3>{gifProp.title}</h3>
      {gifProp.images.original.url ? (
        <Link to={`/gifs/${gifProp.id}`}>
          <img src={gifProp.images.original.url} alt={gifProp.title} />
        </Link>
      ) : (
        <img src={fourOhFour} alt="not found" />
      )}

      {user &&
        (isFav(gifProp.id) ? (
          <button onClick={() => deleteFavoriteHandler(gifProp.id)}>
            Delete Favorite
          </button>
        ) : (
          <button onClick={() => addFavoriteHandler({ gif: gifProp })}>
            Add Favorite
          </button>
        ))}
    </li>
  );
};

export default Card;
