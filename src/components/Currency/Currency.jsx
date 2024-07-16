import { useEffect, useState } from "react";
import getCurrency from "../../service/MonobankApi";
import Loader from "../../components/Loader/Loader";
import useRespons from "../../hooks/useRespons";

import desktopImage from "../../images/currency/currency-dekstop@1x.webp";
import tabletImage from "../../images/currency/currency-tablet@1x.webp";
import mobileImage from "../../images/currency/currency-mobile@1x.webp";

import s from "./Currency.module.css";

const Currency = () => {
  const { mobileUser, tabletUser, desktopUser } = useRespons();
  const [currency, setCurrency] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCurrency();
        setCurrency(data);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      } finally {
        setLoading(false);
      }
    };
    // fetchData();
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  // if (!currency) {
  //   return <div>No currency data available.</div>;
  // }

  const getImage = () => {
    if (desktopUser) return desktopImage;
    if (tabletUser) return tabletImage;
    if (mobileUser) return mobileImage;
    return desktopImage;
  };

  return (
    <div className={s.wrapperCurrency}>
      <div className={s.headCurrency}>
        <p className={s.currency}>Currency</p>
        <p className={s.purchase}>Purchase</p>
        <p className={s.sale}>Sale</p>
      </div>
      <div className={s.valueWrapper}>
        <div className={s.valueContainer}>
          <p>USD</p>
          <p>{currency?.usd ? currency.usd.rateBuy.toFixed(2) : "-"}</p>
          <p>{currency?.usd ? currency.usd.rateSell.toFixed(2) : "-"}</p>
        </div>
        <div className={s.valueContainer}>
          <p>EUR</p>
          <p>{currency?.eur ? currency.eur.rateBuy.toFixed(2) : "-"}</p>
          <p>{currency?.eur ? currency.eur.rateSell.toFixed(2) : "-"}</p>
        </div>
      </div>
      <img className={s.image} src={getImage()} alt="stats" />
    </div>
  );
};

export default Currency;
