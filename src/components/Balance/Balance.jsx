import { useSelector } from "react-redux";

import s from "./Balance.module.css";
import { selectSummary } from "../../redux/categories/selectors";

const Balance = () => {
  const userBalance = useSelector(selectSummary);

  const formattedBalance = userBalance?.periodTotal
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
