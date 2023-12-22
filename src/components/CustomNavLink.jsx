import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children}) => {
  return (
    <NavLink className="hover:text-customPink" to={to}
    style={({ isActive }) => ({
      color: isActive ? 'pink' : '',
    })}>
        {children}
    </NavLink>
  );
};

export default CustomNavLink;