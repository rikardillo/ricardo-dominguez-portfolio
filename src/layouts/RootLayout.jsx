import { Outlet, NavLink, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import meditationImage from "../assets/img/meditation.jpg";
import sunsetImage from "../assets/img/sunset.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout() {
  const location = useLocation(); // Get the current path

  // Function to return the background image based on the route
  const getBackgroundImage = () => {
    switch (location.pathname) {
      case "/":
        return `url(${sunsetImage})`;
      case "/work":
        return `url(${meditationImage})`;
      // Add other cases for different paths
      default:
        return `url(${meditationImage})`; // Default image
    }
  };

  return (
    <div
      className="relative flex h-full min-h-screen flex-col items-center bg-black/85 bg-home bg-cover  text-white bg-blend-multiply"
      style={{
        backgroundImage: getBackgroundImage(),
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <div className="main-container content flex h-full w-full grow flex-col items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
