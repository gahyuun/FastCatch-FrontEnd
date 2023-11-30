import { atom } from 'recoil';

interface userInfoI {
  id: number;
  email: string;
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
  cartId: number;
}

export const userState = atom<userInfoI | null>({
  key: 'userState',
  default: null
});