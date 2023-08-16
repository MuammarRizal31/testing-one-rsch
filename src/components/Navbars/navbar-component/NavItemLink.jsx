import { NavLink } from "react-router-dom";

const NavItemLink = ({ path, text }) => {
  return (
    <NavLink to={path} className={"nav-link"}>
      <div>{text}</div>
    </NavLink>
  );
};

export default NavItemLink;
