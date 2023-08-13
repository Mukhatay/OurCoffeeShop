import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Page/Main";
import OurCoffee from "./Page/OurCoffee";
import ForYourPleasure from "./Page/ForYourPleasure";
import Layout from "./components/Layout";
import OneCoffee from "./Page/OneCoffee";

function App() {
  const invariant = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main></Main>,
        },
        {
          path: "OurCoffee",
          element: <OurCoffee></OurCoffee>,
        },
        {
          path: "ForYourPleasure",
          element: <ForYourPleasure></ForYourPleasure>,
        },
        {
          path: "OurCoffee/:id",
          element: <OneCoffee />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={invariant} />
    </div>
  );
}

export default App;
