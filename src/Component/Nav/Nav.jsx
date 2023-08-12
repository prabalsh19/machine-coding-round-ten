import "../component.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/department">Departments</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
