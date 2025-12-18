export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Urban Decay",
    category: "Architecture",
    image: "https://source.unsplash.com/random/1600x900/?dark,architecture,concrete",
  },
  {
    id: "2",
    title: "Luxury Frames",
    category: "Product",
    image: "https://source.unsplash.com/random/1600x900/?dark,luxury,gold",
  },
  {
    id: "3",
    title: "Executive Vision",
    category: "Brand Identity",
    image: "https://source.unsplash.com/random/1600x900/?dark,minimal,workspace",
  },
  {
    id: "4",
    title: "Neon Nights",
    category: "Automotive",
    image: "https://source.unsplash.com/random/1600x900/?dark,car,neon",
  },
  {
    id: "5",
    title: "Temporal Flux",
    category: "Motion Graphics",
    image: "https://source.unsplash.com/random/1600x900/?dark,abstract,light",
  },
];
