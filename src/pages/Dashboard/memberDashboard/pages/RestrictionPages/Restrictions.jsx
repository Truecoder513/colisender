/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react";
import {
  ColisButton,
  ColisButtonGrey,
  LinkButton,
} from "../../../../../kits/kits";
import AppContext from "../../../../../context/AppContext";

export const NotFoundPage = () => {
  const { auth } = useContext(AppContext);
  return (
    <div className="restrictionPage">
      <h1>404</h1>
      <p>
        Désolé, le contenu que vous recherchez n'existe pas. Soit il a été
        supprimé, soit vous avez mal saisi le lien.
      </p>
      <div>
        <LinkButton
          href={
            auth.isAuth && auth.authInfos.role === "users" ? "/apercu" : "/"
          }
          label={"Repartir à l’accueil"}
        />
        {auth.isAuth && auth.authInfos.role === "users" && (
          <ColisButtonGrey href={"/annonces"} label={"Rechercher  annonce"} />
        )}
      </div>
    </div>
  );
};

export const BannedPage = () => {
  return (
    <div className="restrictionPage">
      <h1>Compte Banni</h1>
      <p>
        Désolé, le contenu que vous recherchez n’est pas accessible . Votre
        compte a été banni suites aux violations des règles.
      </p>
      <div>
        <ColisButton label={"Contactez un Conseillé"} />
      </div>
    </div>
  );
};
