import React from "react";
import { Routes, Route } from "react-router-dom";
//import ChapterOne from "../Chapter-1/ChapterOne";
import { ChapterTwo, chaptertwo } from "../modules/chapter-2";
import Signin from "../modules/chapter-2/widgets/authentifications";
import LayoutInit from "../component/LayoutInit";
import ErrorPage from "../component/ErrorPage";

export default function BaseRoute() {
  const arrayroute = [
    { path: "home", element: "ChapterTwo" },
    { path: "Sign-in", element: "authentifications" },
    { path: "Sign_out", element: "authentifications" },
    { path: "ChapterOne", element: "ChapterOne" },
    { path: "ChapterTwo", element: "ChapterTwo" },
    { Path: "*", element: "ErrorPage" },
  ];
  return (
    <React.Suspense>
      <Routes>
        <Route
          index
          element={
            <LayoutInit>
              <chaptertwo />
            </LayoutInit>
          }
        />
        <Route
          index
          element={
            <LayoutInit>
              <chapterone />
            </LayoutInit>
          }
        />
        <Route
          path="home"
          element={
            <LayoutInit>
              <chaptertwo />
            </LayoutInit>
          }
        />
        {arrayRoute.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<LayoutInit>{route.element}</LayoutInit>}
          />
        ))}
        <Route path="sign-in" element={<authentificaations />} />
        <Route path="sign-out" element={<authentificaations />} />
        <Route
          path="Chapterone"
          element={
            <LayoutInit>
              <chapterone />
            </LayoutInit>
          }
        />
        <Route
          path="chapter-two"
          element={
            <LayoutInit>
              <chaptertwo />
            </LayoutInit>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};
