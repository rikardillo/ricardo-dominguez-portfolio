import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "#",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
