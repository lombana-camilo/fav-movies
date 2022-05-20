import { useState, useEffect } from "react";
import validateForm from "./validateForm.js";

const LogIn = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleSignin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  useEffect(() => setError(validateForm(login)), [login]);
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around inset-y-64 inset-x-1/3 absolute top-36">
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
      <button className="bg-secondary w-44 ">Login</button>
    </form>
  );
};

export default LogIn;
