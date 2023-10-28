import axios from "axios";
import MultipleGifResponse from "../models/MultipleGifResponse";
import SingleGifResponse from "../models/SingleGifResponse";

const baseURL: string = "https://api.giphy.com/v1/gifs";
const key: string = process.env.REACT_APP_GIPHY_KEY || "";

export const getTrendingGifs = async (): Promise<MultipleGifResponse> => {
  return (await axios.get(baseURL + "/trending", { params: { api_key: key } }))
    .data;
};

export const getGifsBySearchTerm = async (
  searchTerm: string
): Promise<MultipleGifResponse> => {
  return (
    await axios.get(baseURL + "/search", {
      params: { api_key: key, q: searchTerm },
    })
  ).data;
};

export const getGifById = async (id: string): Promise<SingleGifResponse> => {
  return (
    await axios.get(baseURL + "/" + encodeURIComponent(id), {
      params: { api_key: key },
    })
  ).data;
};
