import { useMediaQuery } from "react-responsive";

function useResponse() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return { isMobile, isTablet, isDesktop };
}

export default useResponse;
