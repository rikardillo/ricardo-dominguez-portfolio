import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import wodCharacterSheet from "../../assets/img/wod-character-sheet.png";
import DetailSection from "../DetailSection";

export default function WoDCharacterSheet() {
  return (
    <div className="mt-[8rem] flex w-full max-w-[600px] flex-col gap-6 p-4 sm:p-0">
      <Link
        to="/work"
        className="font flex cursor-pointer items-center gap-2 font-light uppercase transition-all duration-300 hover:font-bold"
      >
        <IoChevronBackOutline className="h-full" />
        Back to projects
      </Link>

      <div>
        <h1 className="text-3xl font-extrabold uppercase text-amber-500">
          World of Darkness
        </h1>
        <h3 className="font-bold uppercase">Online Character Sheet</h3>
      </div>

      <img
        src={wodCharacterSheet}
        alt="World of Darkness Character Sheet"
        className="rounded-md"
      />

      <DetailSection title="Inspiration">
        <p>
          I've played Table top RPG's since I was in highschool, and when it
          came to keeping track of our characters we got pretty creative to say
          the least. From Editable PDFs to super elaborate Excell sheets we've
          done it all.
        </p>
        <p>
          Throughout the years different digital tools have come and gone, but
          none specifically for the TTRPG World of Darkness and it's different
          character options (called splats). Since you can make different kinds
          of characters to explore the modern horrors of the night, I always
          dreamt of a centralized online character building tool to keep track
          of them all.
        </p>
      </DetailSection>

      <DetailSection title="The Prototype">
        <p>
          I'd been learning React for a while, and finally got used to thinking
          in components and using state. Once I realized this I felt confident
          to create a simple version of this website and share it with the
          world.
        </p>
        <p>
          The first version was incredibly simple and only kept the information
          within the component states. It was a few weeks study and eventually I
          evolved the site to keep the changes in Local Storage.
        </p>
      </DetailSection>

      <DetailSection title="Database">
        <p>
          After I'd gotten the frontend working, in order to make it actually
          useful I used Google's Firestore Database service to give users the
          opportunity to create an account and store their characters
          information.
        </p>
      </DetailSection>
    </div>
  );
}
