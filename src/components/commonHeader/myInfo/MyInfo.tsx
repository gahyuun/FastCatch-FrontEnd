import { useNavigate } from "react-router-dom";
import "./myInfo.scss";

const MyInfo = () => {
  const navigate = useNavigate();
  const moveToMembersHandler = () => {
    navigate("/members");
  };

  return (
    <button className="my-info-container" onClick={moveToMembersHandler}>
      <div className="my-info-profileImage"></div>
      <span className="text-body3">김놀자</span>
    </button>
  );
};
export default MyInfo;
