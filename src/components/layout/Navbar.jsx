import SignedInLinks from "./SignedInLink.jsx";
import SignedOutLinks from "./SignedOutLink.jsx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <nav className="bg-nav font-bold p-2 flex justify-around fixed w-full z-20">
        <Link to="/">
          <h1 className="text-3xl hidden md:block"> Fav Movies</h1>
        </Link>
        {user ? <SignedInLinks user={user}/> : <SignedOutLinks />}
      </nav>
    </>
  );
};

export default Navbar;
