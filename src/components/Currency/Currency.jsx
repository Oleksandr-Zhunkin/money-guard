import { useEffect, useState } from "react";
import { fetchCurrency } from "../../service/MonobankApi.js";
import Loader from "../../components/Loader/Loader";
import useRespons from "../../hooks/useRespons.js";
import desktopImage from "../../images/currency/currency-dekstop@1x.webp";
import tabletImage from "../../images/currency/currency-tablet@1x.webp";
import mobileImage from "../../images/currency/currency-mobile@1x.webp";
import s from "./Currency.module.css";

const Currency = () => {
  const { mobileUser, tabletUser, desktopUser } = useRespons();
  const [currency, setCurrency] = useState({
    usd: null,
    eur: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrency();
        setCurrency({
          usd: data.usd.toFixed(2),
          eur: data.eur.toFixed(2),
        });
        localStorage.setItem("currency", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching currency data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!currency.usd && !currency.eur) {
      fetchData();
    }
  }, [currency]);

  if (loading) {
    return <Loader />;
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
          <p>{currency.usd}</p>
          <p>{currency.usd}</p>
        </div>
        <div className={s.valueContainer}>
          <p>EUR</p>
          <p>{currency.eur}</p>
          <p>{currency.eur}</p>
        </div>
      </div>
      <img className={s.image} src={getImage()} alt="stats" />
    </div>
  );
};

export default Currency;
