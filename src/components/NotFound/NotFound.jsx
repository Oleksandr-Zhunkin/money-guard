import mobNotFound from "../../images/notFound/mob-notFound.png";
import descNotFound from "../../images/notFound/desk-notFound.png";
import useResponse from "../../hooks/useResponse";
import s from "../NotFound/NotFound.module.scss";

export const NotFound = () => {
  const { isMobile } = useResponse();

  return (
    <>
      <div>
        <img
          className={s.image}
          src={isMobile ? mobNotFound : descNotFound}
          alt="not found page"
        />
      </div>
    </>
  );
};
export default NotFound;
