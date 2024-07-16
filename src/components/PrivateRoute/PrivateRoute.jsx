import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLogedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefresh);
//   return !isLogedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
// };
// export default PrivateRoute;

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to="login" state={location} />;
};
export default PrivateRoute;
