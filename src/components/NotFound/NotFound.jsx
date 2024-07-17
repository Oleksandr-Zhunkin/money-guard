import mobNotFound from "../../images/notFound/mob-notFound.png";
import descNotFound from "../../images/notFound/desk-notFound.png";
import useRespons from "../../hooks/useRespons";
import s from "../NotFound/NotFound.module.scss";

export const NotFound = () => {
  const { mobileUser } = useRespons();

  return (
    <>
      <div>
        <img
          className={s.image}
          src={mobileUser ? mobNotFound : descNotFound}
          alt="not found page"
        />
      </div>
    </>
  );
};
export default NotFound;
