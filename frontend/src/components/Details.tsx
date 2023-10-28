import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyService";
import "./Details.css";
import { useParams } from "react-router-dom";

// http://localhost:3000/gifs/0g9WUnfaU9EoxTVK4N

const Details = () => {
  const [gif, setGif] = useState<Gif | null>(null);
  const id = useParams().id;

  useEffect(() => {
    (async () => {
      const gifFromGiphy: Gif = (await getGifById(id!)).data;
      setGif(gifFromGiphy);
    })();
  }, []);

  return (
    <div className="Details">
      <h2>{gif?.title}</h2>
      <img src={gif?.images.original.url} alt={gif?.title} />
    </div>
  );
};

export default Details;
