import img1 from "@assets/generated_images/bride_groom_luxury_wedding_ceremony.png";
import img2 from "@assets/generated_images/bride_portrait_elegant_wedding_dress.png";
import img3 from "@assets/generated_images/wedding_reception_dance_romantic.png";
import img4 from "@assets/generated_images/groom_portrait_luxury_suit_detail.png";
import img5 from "@assets/generated_images/wedding_venue_setup_luxury_decoration.png";

export interface WeddingStory {
  id: string;
  coupleNames: string;
  location: string;
  date: string;
  image: string;
  category: string;
}

export const weddingStories: WeddingStory[] = [
  {
    id: "1",
    coupleNames: "Aditi & Vihaan",
    location: "Udaipur, India",
    date: "Dec 2024",
    image: img1,
    category: "The Royal Wedding",
  },
  {
    id: "2",
    coupleNames: "Emma & James",
    location: "Tuscany, Italy",
    date: "Jun 2024",
    image: img2,
    category: "European Romance",
  },
  {
    id: "3",
    coupleNames: "Sophia & Marco",
    location: "Amalfi Coast",
    date: "Sep 2024",
    image: img3,
    category: "Coastal Dreams",
  },
  {
    id: "4",
    coupleNames: "Isabella & Giovanni",
    location: "Venice, Italy",
    date: "May 2024",
    image: img4,
    category: "Venetian Elegance",
  },
  {
    id: "5",
    coupleNames: "Olivia & Ethan",
    location: "Bali, Indonesia",
    date: "Nov 2024",
    image: img5,
    category: "Tropical Paradise",
  },
];
