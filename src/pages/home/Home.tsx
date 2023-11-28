import axios from "axios";
import { useQuery } from "react-query";
import AccomodationItem from "./accomodationItem/AccomodationItem";
import "./home.scss";

const fetchAccommodationsData = async () => {
  try {
    const res = await axios.get("../../../public/data/allAccommodations.json");
    console.log(res, "res");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch accs data");
  }
};

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["accommodations"],
    queryFn: fetchAccommodationsData,
    staleTime: 500000,
    select: (data) => data.data,
  });

  if (isLoading) {
    return <div>로딩~</div>;
  }
  if (isError) {
    return <div>에러~</div>;
  }

  console.log(data, "데이터~");

  return (
    <div className="home-wrapper">
      <div className="home-inner">
        {//
        data?.accommodations?.map((acc: any) => <AccomodationItem key={acc.id} data={acc} />)}
      </div>
    </div>
  );
};

export default Home;
