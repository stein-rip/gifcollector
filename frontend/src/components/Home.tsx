import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Gif from "../models/Gif";
import { getGifsBySearchTerm, getTrendingGifs } from "../services/GiphyService";
import CardList from "./CardList";
import Form from "./Form";
import "./Home.css";

// http://localhost:3000/?search-term=lentils

const Home = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search-term");

  useEffect(() => {
    (async () => {
      if (searchTerm) {
        const gifs: Gif[] = (await getGifsBySearchTerm(searchTerm)).data;
        setGifs(gifs);
      } else {
        const gifs: Gif[] = (await getTrendingGifs()).data;
        setGifs(gifs);
      }
    })();
  }, [searchTerm]);

  return (
    <div className="Home">
      <Form />
      <CardList gifArrayProp={gifs} />
    </div>
  );
};

export default Home;
