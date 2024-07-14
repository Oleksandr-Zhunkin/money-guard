import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
