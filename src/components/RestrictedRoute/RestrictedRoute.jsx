import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

// const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLogedIn = useSelector(selectIsLoggedIn);
//   console.log(location);

//   return isLogedIn ? <Navigate to={redirectTo} /> : Component;
// };
//
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
