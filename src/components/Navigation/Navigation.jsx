import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";
import HomeIcon from "../Icons/IconHome";
import IconStatistics from "../Icons/IconStatistics";
import IconCurrency from "../Icons/IconCurrency";
import clsx from "clsx";
import useRespons from "../../hooks/useRespons";
import Balance from "../Balance/Balance";
import Currency from "../Currency/Currency";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const { mobileUser } = useRespons();

  return (
    <div className={s.side_bar}>
      <div className={s.nav_balance}>
        <nav className={s.wrapper}>
          <NavLink to="/" className={buildLinkClass}>
            <div className={s.link_wrap}>
              <HomeIcon title="Home" />
              {!mobileUser && <p className={s.text}>Home</p>}
            </div>
          </NavLink>

          <NavLink to="/statistics" className={buildLinkClass}>
            <div className={s.link_wrap}>
              <IconStatistics title="Statistics" />
              {!mobileUser && <p className={s.text}>Statistics</p>}
            </div>
          </NavLink>

          {mobileUser && (
            <NavLink to="/currency" className={buildLinkClass}>
              <IconCurrency title="Currency" />
            </NavLink>
          )}
        </nav>
        <Balance />
      </div>
      {!mobileUser && <Currency />}
    </div>
  );
};
export default Navigation;
