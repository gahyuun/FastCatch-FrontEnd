import MembersHeader from "./membersHeader/MembersHeader";
import MembersInfo from "./membersInfo/MembersInfo";

import "./members.scss";

const Members = () => {
  return (
    <div className="members">
      <MembersHeader />
      <MembersInfo />
    </div>
  );
};

export default Members;
