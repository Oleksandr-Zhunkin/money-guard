import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <Navigate to={location?.state || "/"} replace />
  ) : (
    children
  );
};
export default RestrictedRoute;
