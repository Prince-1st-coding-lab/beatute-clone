import productCerave from "@/assets/product-cerave.jpg";
import productLrp from "@/assets/product-lrp.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryMakeup from "@/assets/category-makeup.jpg";

export type CatalogItem = {
  id: string;
  image: string;
  alt: string;
  brand: string;
  name: string;
  price: number;
};

export const catalog: CatalogItem[] = [
  {
    id: "cerave-lotion",
    image: productCerave,
    alt: "CeraVe Daily Moisturizing Lotion pump bottle",
    brand: "CeraVe",
    name: "Daily Moisturizing Lotion (236ml)",
    price: 18500,
  },
  {
    id: "lrp-anthelios",
    image: productLrp,
    alt: "La Roche-Posay Anthelios SPF 50+ sunscreen tube",
    brand: "La Roche-Posay",
    name: "Anthelios Invisible Fluid SPF 50+",
    price: 24000,
  },
  {
    id: "skincare-set",
    image: categorySkincare,
    alt: "Creamy white face cream texture",
    brand: "Beautè Select",
    name: "Glow Skincare Starter Set",
    price: 32000,
  },
  {
    id: "face-lips",
    image: categoryMakeup,
    alt: "Liquid foundation on a soft pink background",
    brand: "Beautè Select",
    name: "Face & Lips Essentials Kit",
    price: 27500,
  },
];

export const WHATSAPP_NUMBER = "250796604901";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const formatRwf = (value: number) => `${value.toLocaleString("en-US")} RWF`;
