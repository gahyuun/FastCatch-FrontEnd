interface memberInfoI {
  id: number;
  email: string;
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
  cartId: number;
}

export interface memberResI {
  accessToken: string;
  refreshToken: string;
  memberResponse: memberInfoI;
}
