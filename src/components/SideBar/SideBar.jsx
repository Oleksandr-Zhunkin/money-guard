import Balance from "../Balance/Balance";
import Currency from "../Currency/Currency";
import Navigation from "../Navigation/Navigation";
import s from "../SideBar/SideBar.module.scss";

const SideBar = () => {
  return (
    <div className={s.wrapper}>
      <Navigation />
      <Balance />
      {/* <Currency /> */}
    </div>
  );
};
export default SideBar;
