import { useMediaQuery } from "react-responsive";

function useRespons() {
  const mobileUser = useMediaQuery({ query: "(max-width: 767px)" });
  const tabletUser = useMediaQuery({ query: "(max-width: 1279px)" });
  const desktopUser = useMediaQuery({ query: "(min-width: 1280px)" });
  return { mobileUser, tabletUser, desktopUser };
}

export default useRespons;
