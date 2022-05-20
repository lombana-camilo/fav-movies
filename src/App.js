import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.jsx";
import MoviesList from "./components/movies/MoviesList.jsx";
import MovieDetails from "./components/movies/MovieDetails.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Favourites from "./components/movies/Favourites";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-bg h-screen text-primary">
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
