import LogOut from "./../auth/LogOut.jsx"
import { NavLink } from "react-router-dom";

const SignedInLinks = ({user}) => {
  let initials = user.username && user.username.slice(0,2).toUpperCase()

  return (
    <div>
      <ul className="text-focus flex  space-x-5">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/favourites">Favourites</NavLink></li>
        <li><NavLink to="/"><LogOut /></NavLink></li>
        <li><NavLink to="/favourites" className="bg-primary rounded-full p-1">{initials}</NavLink></li> 
      </ul>
    </div>
  );
};

export default SignedInLinks;
