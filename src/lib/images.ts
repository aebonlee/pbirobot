import hero from "@/images/pbi_8.webp";
import proBanner from "@/images/pbi_2.webp";
import proLifestyle from "@/images/pbi_4.webp";
import proCharging from "@/images/pbi_1.webp";
import ultraCommercial from "@/images/pbi_9.webp";
import ultraWall from "@/images/pbi_3.webp";
import ultraAerial from "@/images/pbi_7.webp";
import underwaterClose1 from "@/images/pbi_5.webp";
import underwaterClose2 from "@/images/pbi_6.webp";

export const images = {
  hero,
  pro: {
    main: proBanner,
    lifestyle: proLifestyle,
    charging: proCharging,
  },
  ultra: {
    main: ultraCommercial,
    wall: ultraWall,
    aerial: ultraAerial,
  },
  details: {
    underwater1: underwaterClose1,
    underwater2: underwaterClose2,
  },
} as const;

export const productImages = {
  "aquasense-2-pro": [proBanner, proLifestyle, proCharging],
  "aquasense-2-ultra": [ultraCommercial, ultraWall, ultraAerial],
} as const;
