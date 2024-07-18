import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import s from "./Balance.module.scss";

const Balance = () => {
  const userBalance = useSelector(selectUser);

  const formattedBalance = userBalance?.balance
    ?.toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div className={s.balanceContainer}>
      <p className={s.balanceTitle}>YOUR BALANCE</p>
      <p className={s.balanceAmount}>
        <span className={s.balanceAmount1}>₴</span> {formattedBalance}
      </p>
    </div>
  );
};

export default Balance;
