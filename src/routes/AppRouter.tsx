import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router";
import { authedRoutes, notAuthRoutes } from "./routes";
import AppContext from "../context/AppContext";

const AppRouter = () => {
  const { auth } = useContext(AppContext);
  return (
    <div>
      <Routes>
        {auth.isAuth ? (
          authedRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.element}
              key={"page" + route.label}
            />
          ))
        ) : (
          <>
            {notAuthRoutes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={"page" + route.label}
              />
            ))}
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default AppRouter;
