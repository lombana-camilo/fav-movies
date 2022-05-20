import SignedInLinks from "./SignedInLink.jsx"
import SignedOutLinks from "./SignedOutLink.jsx"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <>
         <nav className="bg-bg font-bold p-2 flex justify-around fixed w-full">
            <Link to="/">
               <h1 className="text-3xl"> Video App </h1>
            </Link>
            <SignedInLinks />
            <SignedOutLinks />
         </nav>
         </>
  );
};

export default Navbar;
