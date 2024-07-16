import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Section from "./components/Section/Section";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import Loader from "./components/Loader/Loader";
import { refreshThunk } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import Currency from "./components/Currency/Currency.jsx";
import StatisticDatePicker from "./components/StatisticsDataPicker/StatisticsDatePicker.jsx";
import Statistics from "./pages/Statistics/Statistics.jsx";
import {
  categoriesThunk,
  summaryThunk,
} from "./redux/categories/operations.js";
import useRespons from "./hooks/useRespons.js";

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
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route index element={<HomePage />} />
              <Route path="statistics" element={<Statistics />} />
              <Route path="currency" element={mobileUser && <Currency />} />
            </Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute>
                  <LoginPage />
                </RestrictedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute>
                  <RegisterPage />
                </RestrictedRoute>
              }
            />
          </Routes>

          <StatisticDatePicker />
        </Section>
      )}
    </>
  );
}

export default App;
