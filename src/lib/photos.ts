import p1 from "@/assets/1.jpeg";
import p2 from "@/assets/2.jpeg";
import p3 from "@/assets/3.jpeg";
import p4 from "@/assets/4.jpeg";
import p5 from "@/assets/5.jpeg";
import p6 from "@/assets/6.jpeg";
import p7 from "@/assets/7.jpeg";
import p8 from "@/assets/8.jpeg";
import p9 from "@/assets/9.jpeg";
import p10 from "@/assets/10.jpeg";
import p11 from "@/assets/11.jpeg";
import p12 from "@/assets/12.jpeg";
import p13 from "@/assets/13.jpeg";
import p14 from "@/assets/14.jpeg";
import p15 from "@/assets/15.jpeg";
import p16 from "@/assets/16.jpeg";

/** Our photos, in upload order. */
export const photos: string[] = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
];

/** Pick a photo by index, wrapping around. */
export function photo(i: number) {
  return photos[i % photos.length]!;
}