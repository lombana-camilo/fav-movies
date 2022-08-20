import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validateForm from "./validateForm.js";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const LogIn = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const [logMessage, setLogMessage] = useState({ error: "", success: "" });
  const navigate = useNavigate()

  const handleSignin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  useEffect(() => setError(validateForm(login)), [login]);

  const onSubmit = (e) => {
    e.preventDefault();
      const auth = getAuth()
      signInWithEmailAndPassword(auth, login.email, login.password)
      .then(cred =>{
            setLogMessage({success:`Welcome ${cred.user.email}`})
            setTimeout(()=>{
               navigate("/favourites")
            },1000)
         })
      .catch(e=> setLogMessage({error:e.message}))
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around inset-y-64 inset-x-1/4 md:inset-x-1/3 absolute top-36">
      <h5 className="text-2xl font-bold justify-center">Sign In</h5>
      <label> Email
        <input
          className="w-full"
          type="email"
          name="email"
          placeholder="sample@gmail.com"
          onChange={handleSignin}
        />
            {error.email && login.email && ( <span className="text-focus text-xs flex absolute">{error.email}</span>)}
      </label>
      <label>
        Password
        <input
          className="w-full"
          type="password"
          name="password"
          placeholder="*****"
          onChange={handleSignin}
        />
            {error.password && login.password && ( <span className="text-focus text-xs flex absolute">{error.password}</span>)}
      </label>
         <div>
            <button className="bg-secondary w-full ">Login</button>
            {logMessage.error && ( <span className="text-focus text-xs flex absolute">{logMessage.error}</span>)}
            {logMessage.success && ( <span className="text-secondary text-base flex absolute">{logMessage.success}</span>)}
         </div>
    </form>
  );
};

export default LogIn;
