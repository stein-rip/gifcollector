import { ObjectId } from "mongodb";

interface Original {
  url: string;
}

interface Images {
  original: Original;
}

interface Gif {
  id: string;
  title: string;
  images: Images;
}

export default interface Favorite {
  _id: ObjectId;
  gif: Gif;
  userId?: string;
}
