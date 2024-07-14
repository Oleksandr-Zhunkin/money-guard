import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Navigation />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
