import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

const LogOut = () => {
   const navigate = useNavigate()
   const logout = ()=>{
      const auth = getAuth();
      signOut(auth)
      .then(()=> navigate("/"))
      .catch(e=> console.log(e.message))
   }
   return (
   <button onClick={logout}>Log Out</button>     
   )
}

export default LogOut
