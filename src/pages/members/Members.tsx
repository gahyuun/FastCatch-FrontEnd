import MembersHeader from "@/pages/members/membersHeader/MembersHeader";
import MembersInfo from "@/pages/members/membersInfo/MembersInfo";

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
