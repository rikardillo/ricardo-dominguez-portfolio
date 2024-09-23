import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Process from "./pages/Process";
import AfterWork from "./pages/AfterWork";
import CV from "./pages/CV";
import BeautifulSudoku from "./components/Projects/BeautifulSudoku";
import CompendioLegalRd from "./components/Projects/CompendioLegalRd";
import WoDCharacterSheet from "./components/Projects/WoDCharacterSheet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/after-work",
        element: <AfterWork />,
      },
      {
        path: "/cv",
        element: <CV />,
      },
      {
        path: "/work/beautiful-sudoku",
        element: <BeautifulSudoku />,
      },
      {
        path: "/work/compendio-legal-rd",
        element: <CompendioLegalRd />,
      },
      {
        path: "/work/wod-character-sheet",
        element: <WoDCharacterSheet />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
