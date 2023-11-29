import { QueryClient } from "react-query";
import { OptionI } from "./DetailCategoryModal";
import { Accommodation } from "@/src/states/detailState";

export const commitOptions = (
  activeTab: number,
  options: OptionI[],
  queryClient: QueryClient,
  setFilteredAtom: React.Dispatch<React.SetStateAction<Accommodation[]>>,
  setOpenDetail: React.Dispatch<React.SetStateAction<boolean>>
) => {

  const selectedOptions = options.filter((option) => option.state);
  const cachedMainData: any = queryClient.getQueryData(['accommodations']);
  const cachedData = cachedMainData.data.accommodations;

  if (cachedData) {
    let sortedData;

    // 첫번째 필터 (순서정렬)
    switch (activeTab) {
      case 1:
        sortedData = [...cachedData].sort((a, b) => a.lowestPrice - b.lowestPrice);
        break;
      case 2:
        sortedData = [...cachedData].sort((a, b) => b.lowestPrice - a.lowestPrice);
        break;
      case 3:
        sortedData = [...cachedData].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sortedData = [...cachedData];
        break;
    }

    // 두번째 필터 (옵션선택)
    const filteredData = sortedData.filter(item => {
      const accommodationOption = item.accommodationOption;
      return selectedOptions.every(selectedOption => accommodationOption[selectedOption.key]);
    });

    // 필터된 값 전역상태 저장
    setFilteredAtom(filteredData);
    console.log(filteredData);

    // 모달창 닫기
    setOpenDetail(false);
  }
};
