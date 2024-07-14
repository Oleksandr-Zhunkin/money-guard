import { NavLink } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </nav>
  );
};
export default Navigation;
