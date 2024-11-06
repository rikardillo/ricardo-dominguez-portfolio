import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import compendioLegalImg from "../../assets/img/compendio-legal-rd.png";
import DetailSection from "../DetailSection";

export default function CompendioLegalRd() {
  return (
    <div className="mt-[8rem] flex w-full max-w-[600px] flex-col gap-6 p-4">
      <Link
        to="/work"
        className="font flex cursor-pointer items-center gap-2 font-light uppercase transition-all duration-300 hover:font-bold"
      >
        <IoChevronBackOutline className="h-full" />
        Back to projects
      </Link>

      <div>
        <h1 className="text-3xl font-extrabold uppercase text-amber-500">
          Compendio Legal RD
        </h1>
        <h3 className="font-bold uppercase">
          Wikipedia for the Dominican Laws
        </h3>
      </div>

      <img
        src={compendioLegalImg}
        alt="Beautiful Sudoku Logo"
        className="rounded-md"
      />

      <DetailSection title="A motorcylist crashed into my car">
        <p>
          ... after which I spent the whole afternoon detained at a police
          station wondering what would happen to me. And it hit me... I really
          had no idea.
        </p>
        <p>
          This is not an uncommon scenario in our third world country, where
          matters are not uncommonly handled informally and with little to no
          official information of important legal processes. Which provided with
          the inspiration and motivation to get this project off the ground.
        </p>
      </DetailSection>

      <DetailSection title="The Vision">
        <p>
          Our judicial system is comprised of thousands of documents which are
          scattered throughout the internet. As it stands there really isn't a
          centralized hub of information where users can easily navigate through
          documents and find the specific legal descriptions of the rules and
          regulations of the country.
        </p>
        <p>The main motivation of this project is a philosophical one.</p>
        <p>
          <span>
            Free and accessible information for the Dominican Population.
          </span>
        </p>
      </DetailSection>
      <DetailSection title="Main Users">
        There are three main users this project is devoted to:
        <ol className="flex gap-4">
          <li>01 Law Students</li>
          <li>02 Practicing Lawyers</li>
          <li>03 General Public</li>
        </ol>
      </DetailSection>
      <DetailSection title=""></DetailSection>
    </div>
  );
}
