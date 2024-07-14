import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Header.module.scss";
import Logo from "../../images/icons/logo.svg";
import exitIcon from "../../images/icons/exit-icon.svg";
import useRespons from "../../hooks/useRespons";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const { mobileUser, tabletUser } = useRespons();

  return (
    isLoggedIn && (
      <header className={s.header}>
        <div className={s.left_side}>
          <img className={s.logo_icon} src={Logo} alt="logo" />
          <p className={s.logo_text}>Money Guard</p>
        </div>
        {mobileUser && (
          <div className={s.right_side}>
            <p className={s.user}>{user}</p>
            <button className={s.exit_btn} type="button">
              <img className={s.exit_icon} src={exitIcon} alt="exit" />
            </button>
          </div>
        )}
        {tabletUser && (
          <div className={s.right_side}>
            <p className={s.user}>{user}</p>
            <button className={s.exit_btn} type="button">
              <img className={s.exit_icon} src={exitIcon} alt="exit" />
              <p className={s.user}>Exit</p>
            </button>
          </div>
        )}
      </header>
    )
  );
};
export default Header;
