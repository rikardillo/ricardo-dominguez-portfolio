import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="h-dvh bg-black text-white ">
      <Header />
      <Outlet />
    </div>
  );
}
