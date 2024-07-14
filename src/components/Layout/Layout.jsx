import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>
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
