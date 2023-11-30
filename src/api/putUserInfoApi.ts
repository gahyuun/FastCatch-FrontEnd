import instance from "./instanceApi";

export const putUserInfoApi = async (
  requestBody: PutUserInfoApiRequestBody
) => {
  try {
    const res = await instance.put("/api/members", requestBody);
    return res;
  } catch (error) {
    console.log(error);
  }
};

interface PutUserInfoApiRequestBody {
  name: string;
  nickname: string;
  birthday: string;
  phoneNumber: string;
}
