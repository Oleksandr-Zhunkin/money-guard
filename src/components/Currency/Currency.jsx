import { useEffect, useState } from "react";
import getCurrency from "../../service/MonobankApi";
import Loader from "../../components/Loader/Loader";
import useRespons from "../../hooks/useRespons";

import desktopImage from "../../images/currency/currency-dekstop@1x.webp";
import tabletImage from "../../images/currency/currency-tablet@1x.webp";
import mobileImage from "../../images/currency/currency-mobile@1x.webp";

import s from "./Currency.module.css";
import { useDispatch, useSelector } from "react-redux";
import { monoThunk } from "../../redux/currency/operations";
import { selectData, selectMono } from "../../redux/currency/selectors";

const Currency = () => {
  const { mobileUser, tabletUser, desktopUser } = useRespons();
  const dispatch = useDispatch();
  // const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);
  const currency = useSelector(selectMono);
  const dataFetch = useSelector(selectData);

  useEffect(() => {
    const currentData = Date.now();

    if (currentData - dataFetch > 360000) {
      dispatch(monoThunk());
    }
  }, [dispatch, dataFetch]);

  // if (loading) {
  //   return <Loader />;
  // }

  if (!currency) {
    return <div>No currency data available.</div>;
  }

  const getImage = () => {
    if (desktopUser) return desktopImage;
    if (tabletUser) return tabletImage;
    if (mobileUser) return mobileImage;
    return desktopImage;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.headCurrency}>
        <p className={s.currency}>Currency</p>
        <p className={s.purchase}>Purchase</p>
        <p className={s.sale}>Sale</p>
      </div>
      <div className={s.valueWrapper}>
        <div className={s.valueContainer}>
          <p>USD</p>
          <p>{currency?.[0].rateBuy.toFixed(2)}</p>
          <p>{currency?.[0].rateSell.toFixed(2)}</p>
        </div>
        <div className={s.valueContainer}>
          <p>EUR</p>
          <p>{currency?.[1].rateBuy.toFixed(2)}</p>
          <p>{currency?.[1].rateSell.toFixed(2)}</p>
        </div>
      </div>
      <img className={s.image} src={getImage()} alt="stats" />
    </div>
  );
};

export default Currency;
