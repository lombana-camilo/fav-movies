import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <div>
      <ul className="text-focus flex  space-x-5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favourites">Sign Up</NavLink></li>
        <li><NavLink to="/loggedout">Log In</NavLink></li>
      </ul>
    </div>
  );
};

export default SignedInLinks;
