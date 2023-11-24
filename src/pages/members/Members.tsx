import MembersHeader from "@/src/pages/members/membersHeader/MembersHeader";
import MembersInfo from "@/src/pages/members/membersInfo/MembersInfo";

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
