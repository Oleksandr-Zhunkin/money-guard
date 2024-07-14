import ModalWindow from "../ModalWindow/ModalWindow";
import s from "./Logout.module.scss";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import useRespons from "../../hooks/useRespons";
import { useState } from "react";

const Logout = ({ modalIsOpen, handleModalClose }) => {
  const dispatch = useDispatch();
  const { mobileUser } = useRespons();

  return (
    <ModalWindow
      isOpen={modalIsOpen}
      onClose={() => {
        handleModalClose();
      }}
    >
      <div className={s.box}>
        {!mobileUser && (
          <>
            <img
              src="../public/Money Guard.svg"
              alt="logo"
              className={s.logo}
            />
            <h4 className={s.title}>Money Guard</h4>
          </>
        )}

        <p className={s.text}>Are you sure you want to log out?</p>
        <button
          onClick={() => {
            dispatch(logoutThunk());
          }}
          className={s.logout}
        >
          logout
        </button>
        <button
          onClick={() => {
            handleModalClose();
          }}
          className={s.cancel}
        >
          cancel
        </button>
      </div>
    </ModalWindow>
  );
};
export default Logout;
