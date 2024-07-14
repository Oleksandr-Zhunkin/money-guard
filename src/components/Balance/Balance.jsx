import PropTypes from "prop-types";
import s from "./Balance.module.css";

const Balance = ({ userBalance }) => {
  const formattedBalance = userBalance
    ? userBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    : "0.00";
  return (
    <div className={s.balanceContainer}>
      <p className={s.balanceTitle}>YOUR BALANCE</p>
      <p className={s.balanceAmount}>
        <span className={s.balanceAmount1}>₴</span> {formattedBalance}
      </p>
    </div>
  );
};

Balance.propTypes = {
  userBalance: PropTypes.number,
};

export default Balance;
