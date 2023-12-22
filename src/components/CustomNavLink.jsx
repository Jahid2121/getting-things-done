import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children}) => {
  return (
    <NavLink className="hover:text-customPink" to={to}
    style={({ isActive }) => ({
      color: isActive ? 'customPink' : '',
    })}>
        {children}
    </NavLink>
  );
};

export default CustomNavLink;