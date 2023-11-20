import { LinkButton } from "../kits/kits";

export const CantPostAnnonnce = () => {
  return (
    <div>
      <p>
        Vous ne pouvez poster ou consulté une annonce que si votre inscription
        finalisée
      </p>
      <div className="btn-act">
        <LinkButton
          label={"Finaliser mon inscription"}
          href={"/finishSubscriptions"}
        />
      </div>
    </div>
  );
};
