import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import validateForm from "./validateForm.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";

const SignUp = () => {
  const [signup, setSignup] = useState({});
  const [error, setError] = useState({});
  const [logMessage, setLogMessage] = useState({ error: "", success: "" });
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  useEffect(() => setError(validateForm(signup)), [signup]);

  const onSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, signup.email, signup.password)
      .then((cred) => {
        updateProfile(cred.user, { displayName: signup.username }).then(() => {
          //Creating firebase document
          setDoc(doc(db, "users", cred.user.uid), {
            email: cred.user.email,
            uid: cred.user.uid,
            username: cred.user.displayName,
            favMovies: [],
          }).then(() => {
            setLogMessage({ success: `Welcome ${cred.user.displayName}` });
            setTimeout(() => {
              navigate("/");
              (window.location.href = window.location.href)
            },700);
          });
        });
      })
      .catch((e) => setLogMessage({ error: e.message }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around inset-y-64 inset-x-1/3 absolute top-36"
    >
      <h5 className="text-2xl font-bold">Sign Up</h5>
      <label>
        {" "}
        User Name{" "}
        <input
          required
          className="w-full"
          type="text"
          name="username"
          onChange={handleSignUp}
        />{" "}
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
        {error.email && signup.email && (
          <span className="text-focus text-xs flex absolute">
            {error.email}
          </span>
        )}
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
        {error.password && signup.password && (
          <span className="text-focus text-xs flex absolute">
            {error.password}
          </span>
        )}
      </label>
      <div>
        <button
          disabled={error.email || error.password}
          className="bg-secondary disabled:bg-focus"
        >
          SignUp
        </button>
        {logMessage.error && (
          <span className="text-focus text-xs flex absolute">
            {logMessage.error}
          </span>
        )}
        {logMessage.success && (
          <span className="text-secondary text-base flex absolute">
            {logMessage.success}
          </span>
        )}
      </div>
    </form>
  );
};

export default SignUp;
