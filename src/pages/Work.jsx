import {
  SiReact,
  SiFirebase,
  SiTypescript,
  SiTailwindcss,
  SiReactrouter,
} from "react-icons/si";
import ProjectCard from "../components/Projects/ProjectCard";
import beautifulSudokuImg from "../assets/img/beautiful-sudoku.png";
import compendioLegalImg from "../assets/img/compendio-legal-rd.png";
import wodCharacterSheetImg from "../assets/img/wod-character-sheet.png";

export default function Work() {
  return (
    <section className="work mt-[8rem] flex h-full max-w-[600px] flex-col items-center justify-center gap-8 p-4 sm:p-0">
      <div className="section-title w-full">
        <h1 className="text-3xl font-extrabold uppercase text-amber-500">
          my projects
        </h1>
        <h3 className="font-light uppercase tracking-[6px]">
          beauty shared so far
        </h3>
      </div>

      <ProjectCard
        title="Beautiful Sudoku"
        to="beautiful-sudoku"
        link="https://beautiful-sudoku.com" // add appropriate link here
        img={beautifulSudokuImg}
        icons={[<SiReact />, <SiTypescript />]}
      />

      <ProjectCard
        title="Compendio Legal RD"
        to="compendio-legal-rd"
        link="https://compendiolegalrd.com" // add appropriate link here
        img={compendioLegalImg}
        icons={[
          <SiReact />,
          <SiTailwindcss />,
          <SiFirebase />,
          <SiReactrouter />,
        ]}
      />

      <ProjectCard
        title="World of Darkness - Character Sheet"
        to="wod-character-sheet"
        link="https://wod-charactersheet.com" // add appropriate link here
        img={wodCharacterSheetImg}
        icons={[
          <SiReact />,
          <SiTailwindcss />,
          <SiFirebase />,
          <SiReactrouter />,
        ]}
      />
    </section>
  );
}
