import img1 from "@assets/generated_images/urban_decay_architecture_dark_concrete.png";
import img2 from "@assets/generated_images/luxury_gold_product_photography.png";
import img3 from "@assets/generated_images/executive_workspace_dark_minimalist.png";
import img4 from "@assets/generated_images/neon_night_car_fast_motion.png";
import img5 from "@assets/generated_images/abstract_motion_light_trails_digital.png";

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
    image: img1,
  },
  {
    id: "2",
    title: "Luxury Frames",
    category: "Product",
    image: img2,
  },
  {
    id: "3",
    title: "Executive Vision",
    category: "Brand Identity",
    image: img3,
  },
  {
    id: "4",
    title: "Neon Nights",
    category: "Automotive",
    image: img4,
  },
  {
    id: "5",
    title: "Temporal Flux",
    category: "Motion Graphics",
    image: img5,
  },
];
