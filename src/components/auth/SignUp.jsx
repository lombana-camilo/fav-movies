import { useEffect, useState } from "react";
import validateForm from "./validateForm.js"

const SignUp = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [signup, setSignup] = useState({});
  const [error, setError] = useState({ email: "", password: "", });

  const handleSignUp = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  useEffect(() => setError(validateForm(signup)), [signup]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around inset-y-64 inset-x-1/3 absolute top-36">
      <h5 className="text-2xl font-bold">Sign Up</h5>
        <label>
            User Name <input className="w-full" type="text" name="username" onChange={handleSignUp} />
        </label>
        <label>
          Email
          <input
            className="w-full"
            type="email"
            name="email"
            placeholder="sample@gmail.com"
            onChange={handleSignUp}
          />
            {error.email && signup.email && <span className="text-focus text-xs flex absolute">{error.email}</span>}
        </label>
        <label>
          Password
          <input
            className="w-full"
            type="password"
            name="password"
            placeholder="*****"
            onChange={handleSignUp}
          />
            {error.password && signup.password && <span className="text-focus text-xs flex absolute">{error.password}</span>}
        </label>
        <button className="bg-secondary">SignUp</button>
    </form>
  );
};

export default SignUp;
