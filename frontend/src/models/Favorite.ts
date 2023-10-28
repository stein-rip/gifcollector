import Gif from "./Gif";

export default interface Favorite {
  _id?: string;
  gif: Gif;
  userId?: string;
}
