import img1Day from "@assets/generated_images/insta_1.jpg";
import img2Day from "@assets/generated_images/insta_2.jpg";
import img3Day from "@assets/generated_images/insta_3.jpg";
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
    coupleNames: "Utkarsh & Bhumika",
    location: "Lychee Bagh, India",
    date: "Jun 2025",
    imageDay: img1Day,
    imageNight: img1Day,
    category: "Royal Heritage",
  },
  {
    id: "2",
    coupleNames: "Nitin & Akshi",
    location: "Jaipur, India",
    date: "May 2025",
    imageDay: img2Day,
    imageNight: img2Day,
    category: "Palace Romance",
  },
  {
    id: "3",
    coupleNames: "Lipi & Rohan",
    location: "Udaipur, India",
    date: "Dec 2024",
    imageDay: img3Day,
    imageNight: img3Day,
    category: "Lakeside Love",
  },
  {
    id: "4",
    coupleNames: "Divya & Aditya",
    location: "Goa, India",
    date: "May 2024",
    imageDay: img4Day,
    imageNight: img4Day,
    category: "Coastal Paradise",
  },
  {
    id: "5",
    coupleNames: "Meera & Harsh",
    location: "Kerala, India",
    date: "Nov 2024",
    imageDay: img5Day,
    imageNight: img5Day,
    category: "Backwater Dreams",
  },
];
