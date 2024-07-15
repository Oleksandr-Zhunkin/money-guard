import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";
import Home from "../../images/icons/home.svg";
import Statistics from "../../images/icons/statistics.svg";
import Currency from "../../images/icons/currency.svg";
import clsx from "clsx";
import useRespons from "../../hooks/useRespons";
import Balance from "../Balance/Balance";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const { mobileUser } = useRespons();

  return (
    <>
      <nav className={s.wrapper}>
        <NavLink to="/" className={buildLinkClass}>
          <img className={s.nav_icons} src={Home} alt="home page" />
        </NavLink>
        <NavLink to="/statistics" className={buildLinkClass}>
          <img className={s.nav_icons} src={Statistics} alt="statistics page" />
        </NavLink>
        {mobileUser && (
          <NavLink to="/currency" className={buildLinkClass}>
            <img className={s.nav_icons} src={Currency} alt="currency page" />
          </NavLink>
        )}
      </nav>
      <Balance />
    </>
  );
};
export default Navigation;
