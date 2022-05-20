import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <div>
      <ul className="text-focus flex  space-x-5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favourites">Favourites</NavLink></li>
        <li><NavLink to="/loggedout">Log Out</NavLink></li>
        <li><NavLink to="/" className="bg-primary rounded-full p-1">CL</NavLink></li> 
      </ul>
    </div>
  );
};

export default SignedInLinks;
