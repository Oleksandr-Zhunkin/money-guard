import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefresh } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLogedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  return !isLogedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
