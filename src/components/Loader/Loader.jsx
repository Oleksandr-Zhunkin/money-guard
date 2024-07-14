import { FallingLines } from "react-loader-spinner";

import s from "./Loader.module.css";

export default function Loader() {
  return (
    <FallingLines
      color="#FFFFFF"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
      wrapperClass={s.loader}
    />
  );
}
