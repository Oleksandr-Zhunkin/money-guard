import { Route, Routes } from "react-router-dom";
import "./App.css";

import Container from "./components/Container/Container";
import Layout from "./components/Layout/Layout";
import Section from "./components/Section/Section";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Test1 from "./pages/Test/Test1";
import Test2 from "./pages/Test/Test2";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(monoThunk());
    // dispatch(categoriesThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis atque
        amet repellat esse quae nulla expedita! Aspernatur sunt aliquid
        molestias veritatis illo numquam quo voluptatum velit exercitationem?
        Minus, ducimus aut?
      </p>
      <HomePage />
    </>
  );
}

export default App;
