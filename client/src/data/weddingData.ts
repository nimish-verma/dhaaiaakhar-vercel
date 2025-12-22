import img1Day from "@assets/generated_images/bride_groom_luxury_wedding_ceremony.png";
import img2Day from "@assets/generated_images/bride_portrait_elegant_wedding_dress.png";
import img3Day from "@assets/generated_images/wedding_reception_dance_romantic.png";
import img4Day from "@assets/generated_images/groom_portrait_luxury_suit_detail.png";
import img5Day from "@assets/generated_images/wedding_venue_setup_luxury_decoration.png";

export interface WeddingStory {
  id: string;
  coupleNames: string;
  location: string;
  date: string;
  imageDay: string;
  imageNight: string;
  category: string;
}

export const weddingStories: WeddingStory[] = [
  {
    id: "1",
    coupleNames: "Aditi & Vihaan",
    location: "Udaipur, India",
    date: "Dec 2024",
    imageDay: img1Day,
    imageNight: img1Day, // Will be replaced with night image
    category: "The Royal Wedding",
  },
  {
    id: "2",
    coupleNames: "Priya & Arjun",
    location: "Jaipur, India",
    date: "Jun 2024",
    imageDay: img2Day,
    imageNight: img2Day, // Will be replaced with night image
    category: "City Palace Romance",
  },
  {
    id: "3",
    coupleNames: "Ananya & Rohan",
    location: "Delhi, India",
    date: "Sep 2024",
    imageDay: img3Day,
    imageNight: img3Day, // Will be replaced with night image
    category: "Metropolitan Elegance",
  },
  {
    id: "4",
    coupleNames: "Divya & Aditya",
    location: "Goa, India",
    date: "May 2024",
    imageDay: img4Day,
    imageNight: img4Day, // Will be replaced with night image
    category: "Coastal Paradise",
  },
  {
    id: "5",
    coupleNames: "Meera & Harsh",
    location: "Kerala, India",
    date: "Nov 2024",
    imageDay: img5Day,
    imageNight: img5Day, // Will be replaced with night image
    category: "Backwater Dreams",
  },
];
