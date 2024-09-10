import { NavLink } from "react-router-dom";

const NavBtn = ({ title, path }) => (
  <div className="cursor-pointer bg-red-800 font-light capitalize transition-all duration-300 hover:font-bold hover:text-amber-500">
    <NavLink to={path}>{title}</NavLink>
  </div>
);

export default function NavBar() {
  return (
    <nav className="flex w-[6rem] gap-2 sm:flex-col">
      <NavBtn title={"home"} path={"/"} />
      <NavBtn title={"work"} path={"/work"} />
      <NavBtn title={"experience"} path={"/experience"} />
      <NavBtn title={"process"} path={"/process"} />
      <NavBtn title={"after work"} path={"/after-work"} />
      <NavBtn title={"CV"} path={"/cv"} />
    </nav>
  );
}
