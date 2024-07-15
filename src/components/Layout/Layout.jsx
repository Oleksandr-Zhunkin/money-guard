import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "../Container/Container";
import s from "../Layout/Layout.module.scss";
import Navigation from "../Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className={s.wrapper}>
          <Navigation />
          <div>
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Layout;
