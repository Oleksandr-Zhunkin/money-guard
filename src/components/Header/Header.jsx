import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import s from "./Header.module.scss";
import Logo from "../../images/icons/logo.svg";
import exitIcon from "../../images/icons/exit-icon.svg";
import useRespons from "../../hooks/useRespons";
import { useState } from "react";
import Logout from "../Logout/Logout";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const { tabletUser } = useRespons();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <header className={s.header}>
          <div className={s.left_side}>
            <img className={s.logo_icon} src={Logo} alt="logo" />
            <p className={s.logo_text}>Money Guard</p>
          </div>

          <div className={s.right_side}>
            <p className={s.user}>{user}</p>
            <button
              onClick={() => {
                handleModalOpen();
              }}
              className={s.exit_btn}
              type="button"
            >
              <img className={s.exit_icon} src={exitIcon} alt="exit" />
              {tabletUser && <p className={s.exit_text}>Exit</p>}
            </button>
          </div>
        </header>
        <Logout
          modalIsOpen={modalIsOpen}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
        />
      </>
    )
  );
};
export default Header;
