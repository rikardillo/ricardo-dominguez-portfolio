import beautifulSudokuImg from "../../assets/img/beautiful-sudoku.png";
import imgSudokuAfternoon from "../../assets/img/sud-afternoon.png";
import imgSudokuMorning from "../../assets/img/sud-morning.png";
import imgSudokuSunset from "../../assets/img/sud-sunset.png";
import imgSudokuNight from "../../assets/img/sud-night.png";
import DetailSection from "../DetailSection";
import { IoArrowBack, IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SudImg = ({ src }) => (
  <div className="relative w-[20rem] items-center overflow-hidden rounded-lg bg-red-300">
    <img src={src} alt="" />
  </div>
);

export default function BeautifulSudoku() {
  return (
    <div className="mt-4 flex w-full max-w-[600px] flex-col gap-6 p-4 sm:p-0">
      <Link
        to="/work"
        className="font flex cursor-pointer items-center gap-2 font-light uppercase transition-all duration-300 hover:font-bold"
      >
        <IoChevronBackOutline className="h-full" />
        Back to projects
      </Link>

      <div>
        <h1 className="text-3xl font-extrabold uppercase text-amber-500">
          Beautiful Sudoku
        </h1>
        <h3 className="font-bold uppercase">Unwind and Relax</h3>
      </div>

      <img
        src={beautifulSudokuImg}
        alt="Beautiful Sudoku Logo"
        className="rounded-md"
      />

      <DetailSection title="i had an itch ...">
        <p>
          ... to play Sudoku online <strong className="font-bold">but</strong>{" "}
          all the ones I saw didn't look or feel or play the way I felt they
          should. Rather than wait for it to magically appear I set to work and
          designed it myself.
        </p>
      </DetailSection>

      <DetailSection title="What's special about it?">
        <h3 className="font-bold uppercase">Aesthetics</h3>
        <p>
          The vision was a calm and soothing escape from monotony. The kind of
          inspiring beauty that takes your breath away and returns it in a wave
          of relaxation and peace.
        </p>
        <p>
          Visually it's designed to evolve as the day goes by. We themed it so
          that depending at what time users play, the game would adapt
          accordingly, whether it's morning, afternoon, sunset or night-time.
        </p>
        <div className="flex w-full items-center gap-2">
          <SudImg src={imgSudokuMorning} />
          <SudImg src={imgSudokuAfternoon} />
        </div>
        <div className="flex w-full items-center gap-2">
          <SudImg src={imgSudokuSunset} />
          <SudImg src={imgSudokuNight} />
        </div>
      </DetailSection>

      <DetailSection title="Gameplay Inputs">
        <p>
          Depending on the users there were several ways they expected the
          inputting of numbers to work on a sudoku website.
        </p>

        <div className="flex flex-col">
          <h3 className="font-bold uppercase">01 Cell First</h3>
          <p>
            Some users first click the empty cell and then the number. A safe,
            but timely approach.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold uppercase">02 Number First</h3>
          <p>
            Other users prefer to choose a number and fill as many cells as they
            need to. Efficient and speedy.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold uppercase">03 Mouse & Keyboard</h3>
          <p>
            A surprising amount of users still prefer a more physical approach
            by clicking on and empty cell and inputing their answer by typing
            the numbers on their keyboards.
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold uppercase">04 Keyboard</h3>
          <p>
            A last kind of user had a preference to using the arrow keys to
            navigate the board and input numbers also using their keyboards.
          </p>
        </div>
        <p>
          As a paragon of the Sudoku experience, we decided to include all four
          input options into a seamless transition to provide the best
          experience regardless of user preference. Play a beautiful game in
          your prefered way.
        </p>
      </DetailSection>

      <DetailSection title="what did the reddit say?">
        <p>
          Initially shared the project on reddit. On several subreddits for
          puzzle games and independent websites. Managed to get the first users
          as well as great opinions to recognize what really mattered to online
          Sudoku Players.
        </p>
        <p>The first surprise was how little users wanted to know the time.</p>
        <p>
          Puzzle difficulty was by far the most requested feature. As it turns
          out, what makes one Sudoku puzzle more difficult than the rest, isn't
          at all intuitive. Part of it is the amount of given clues at the
          beginning, but more critically, it's more a matter of how the geometry
          of <span className="font-bold">which</span> clues were given and how
          they're distributed across the board that mattered the most.
        </p>
      </DetailSection>
    </div>
  );
}
