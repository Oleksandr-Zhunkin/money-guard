import mobNotFound from "../../images/notFound/mob-notFound.png";
import descNotFound from "../../images/notFound/desk-notFound.png";
import useRespons from "../../hooks/useRespons";
import s from "../NotFound/NotFound.module.scss";

export const NotFound = () => {
  const { mobileUser } = useRespons();

  return (
    <>
      {!mobileUser && (
        <div>
          {(
            <img className={s.image} src={descNotFound} alt="not found page" />
          ) || <p className={s.text}>Not Found...</p>}
        </div>
      )}
      {mobileUser && (
        <div>
          {(
            <img className={s.image} src={mobNotFound} alt="not found page" />
          ) || <p className={s.text}>Not Found...</p>}
        </div>
      )}
    </>
  );
};
export default NotFound;
