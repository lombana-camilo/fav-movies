import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <div>
      <ul className="text-focus flex  space-x-5">
        <li><NavLink to="/">Search</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/login">Log In</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
