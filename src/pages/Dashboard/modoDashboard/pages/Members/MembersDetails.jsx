import UserProfil from "../../../globals/UserProfil";

/* eslint-disable react/no-unescaped-entities */
const MembersDetails = () => {
  return (
    <div>
      <div className="modoAction">
        <div>
          <span>Membre de colis</span>
          Membre #45D2iUBKXlM
        </div>
      </div>
      <UserProfil top={false} />
    </div>
  );
};

export default MembersDetails;
