import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
// import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Test1 from "./pages/Test/Test1";
import Test2 from "./pages/Test/Test2";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import Loader from "./components/Loader/Loader";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import useRespons from "./hooks/useRespons.js";
import Currency from "./components/Currency/Currency.jsx";

import StatisticDatePicker from "./components/StatisticsDataPicker/StatisticsDatePicker.jsx";

import Statistics from "./pages/Statistics/Statistics.jsx";
import {
  categoriesThunk,
  summaryThunk,
} from "./redux/categories/operations.js";


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);
  const { mobileUser } = useRespons();

  useEffect(() => {
    dispatch(refreshThunk());
    dispatch(categoriesThunk());
    dispatch(summaryThunk());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Section>
          {/* <Container> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute component={<HomePage />} redirectTo="/login" />
                }
              />
              <Route
                path="/currency"
                element={
                  <PrivateRoute component={<Currency />} redirectTo="/login" />
                }
              />
              <Route
                path="/statistics"
                element={
                  <PrivateRoute
                    component={<Statistics />}
                    redirectTo="/login"
                  />
                }
              />
            </Route>
            <Route
              path="login"
              element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
              }
            />
          </Routes>
          {/* </Container> */}
          <StatisticDatePicker />
        </Section>
      )}
    </>
  );
}

export default App;
