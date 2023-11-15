/* eslint-disable react/prop-types */

import MemberDashboardHeader from "../header/MemberDashboardHeader";

const MemberDashboardLayout = ({ children }) => {
  return (
    <div>
      <MemberDashboardHeader />
      <div className="pages-container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default MemberDashboardLayout;
