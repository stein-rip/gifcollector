interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  id: string;
  title: string;
  images: Images;
}
