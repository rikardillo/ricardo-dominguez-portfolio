import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <header>
      <div className="flex cursor-pointer gap-2 text-xl uppercase">
        <span className="font-bold text-amber-500">Ricardo</span>
        <span className="font-light">Domínguez</span>
      </div>
      <NavBar />
    </header>
  );
}
