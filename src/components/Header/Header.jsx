import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Header.module.css";
import { logoutThunk } from "../../redux/auth/operations";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      <div>
        <span></span>
      </div>
      <div className={s.right_side}>
        <p>Name</p>
        <button>Exit</button>
      </div>
    </header>
  );
};
export default Header;
