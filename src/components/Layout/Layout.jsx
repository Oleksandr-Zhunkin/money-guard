import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "../Container/Container";
import SideBar from "../SideBar/SideBar";
import s from "../Layout/Layout.module.scss";
import Navigation from "../Navigation/Navigation";
import Balance from "../Balance/Balance";
import Currency from "../Currency/Currency";

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
