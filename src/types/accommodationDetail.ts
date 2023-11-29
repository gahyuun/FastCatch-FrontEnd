export interface room {
    price: number;
    roomId: number;
    name: string;
    roomOption: roomOption;
    baseHeadCount: number;
    maxHeadCount: number;
    checkInTime: string;
    checkOutTime: string;
    soldOut: boolean;
    description: string;
    images?:Array<Object>
}

export interface roomOption {
  canCooking?: boolean;
  canSmoking?: boolean;
  cityView?: boolean;
  oceanView?: boolean;
  hasNetflix?: boolean;
  petAccompanying?: boolean;
  hasSmokingRoom?: boolean;
  hasParkingLot?: boolean;
  hasWifi?: boolean;
  hasSwimmingPool?: boolean;
  hasGym?: boolean;
  hasBreakfast?: boolean;
  hasRestaurant?: boolean;
  hasCookingRoom?: boolean;
}