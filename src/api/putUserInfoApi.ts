import instance from "./instanceApi";

export const putUserInfoApi = async (
  requestBody: PutUserInfoApiRequestBody
) => {
  try {
    const res = await instance.put("/api/members", requestBody);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error("유저 정보를 수정하지 못했습니다.");
  }
};

interface PutUserInfoApiRequestBody {
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
}
