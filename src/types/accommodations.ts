// Accommodations 객체입니다.
export interface Accommodation {
  category: "ALL" | "PENSION" | "HOTELRESORT" | "MOTEL" | "GUESTHOUSE";
  id: number;
  image: string;
  lowestPrice: number;
  name: string;
  region: "ALL" | "GYEONGGI" | "SEOUL" | "GANGWON" | "CHUNGCHEONG" | "HONAM" | "GYEONGSANG" | "JEJU";
  soldOut: false;
}

export interface Accommodations {
  category: "ALL" | "PENSION" | "HOTELRESORT" | "MOTEL" | "GUESTHOUSE";
  accommodations: Accommodation[];
  id: number;
  image: string;
  lowestPrice: number;
  name: string;
  region: "ALL" | "GYEONGGI" | "SEOUL" | "GANGWON" | "CHUNGCHEONG" | "HONAM" | "GYEONGSANG" | "JEJU";
  soldOut: false;
  isFirst: boolean;
  isLast: boolean;
  pageNum: number;
  pageSize: number;
  totalElement: number;
  totalPage: number;
}

export type localeType = "SEOUL" | "GYEONGGI" | "GANGWON" | "CHUNGCHEONG" | "HONAM" | "GYEONGSANG" | "JEJU";

export type AccommodationType = "ALL" | "PENSION" | "HOTELRESORT" | "MOTEL" | "GUESTHOUSE";
