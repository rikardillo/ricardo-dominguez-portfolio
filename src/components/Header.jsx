import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <header className="fixed w-full flex flex-col z-10">
      <NavBar />
    </header>
  );
}
