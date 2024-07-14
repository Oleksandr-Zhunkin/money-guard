import { Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Test1 from "./pages/Test/Test1";
import Test2 from "./pages/Test/Test2";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <>
      <Section>
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute component={<Test1 />} redirectTo="/login" />
                }
              />
              <Route
                path="/statistics"
                element={
                  <PrivateRoute component={<Test2 />} redirectTo="/login" />
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
        </Container>
      </Section>
    </>
  );
}

export default App;
