import React from "react";
import { Route, Routes, Navigate } from "react-router";
import { notAuthRoutes } from "./routes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {notAuthRoutes.map((route) => (
          <Route
            path={route.path}
            element={route.element}
            key={"page" + route.label}
          />
        ))}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
