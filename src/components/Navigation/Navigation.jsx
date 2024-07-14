import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
    </nav>
  );
};
export default Navigation;
