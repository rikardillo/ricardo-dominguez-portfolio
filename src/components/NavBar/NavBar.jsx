import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const NavBtn = ({ title, path, children, onClick }) => (
  <div className="flex w-full cursor-pointer p-2 font-light capitalize transition-all duration-300 hover:font-bold sm:w-fit sm:text-center hover:sm:text-amber-500">
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "w-full text-center font-bold text-amber-500"
          : "w-full text-center"
      }
      onClick={onClick}
    >
      {title}
      {children}
    </NavLink>
  </div>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function responsiveClick() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <nav className="flex flex-col gap-2 bg-black/80 p-4 drop-shadow-xl backdrop-blur-[10px] sm:p-8">
      {/* LARGE SCREEN NAV */}
      <div className="hidden w-full justify-between gap-4 sm:flex">
        <NavLink
          to={"/"}
          className="flex cursor-pointer gap-2 text-xl uppercase"
        >
          <span className="font-bold text-amber-500">Ricardo</span>
          <span className="font-light">Domínguez</span>
        </NavLink>
        <nav className="flex gap-4">
          <NavBtn title={"about me"} path="/" />
          <NavBtn title={"work"} path="/work" />
        </nav>
      </div>

      {/* SMALL SCREEN NAV */}
      <div className="responsive-nav flex w-full items-center justify-between sm:hidden">
        <NavLink
          to={"/"}
          className="flex cursor-pointer gap-2 text-xl uppercase"
        >
          <span className="font-bold text-amber-500">Ricardo</span>
          <span className="font-light">Domínguez</span>
        </NavLink>
        <TiThMenu
          className="cursor-pointer text-xl hover:scale-110 hover:text-amber-500"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div
          className={`${!isOpen ? "hidden" : "flex"} w-full flex-col items-center justify-center gap-2 sm:hidden`}
        >
          <NavBtn
            title={"about me"}
            path="/"
            onClick={() => responsiveClick()}
          />
          <NavBtn
            title={"work"}
            path="/work"
            onClick={() => responsiveClick()}
          />
        </div>
      )}
    </nav>
  );
}
