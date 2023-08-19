import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Page/Main";
import OurCoffee from "./Page/OurCoffee";
import ForYourPleasure from "./Page/ForYourPleasure";
import Layout from "./components/Layout";
import OneCoffee from "./Page/OneCoffee";
import ForYourPleasureCoffee from "./Page/ForYourPleasureCoffee";

function App() {
  const invariant = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
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
        {
          path: "ForYourPleasure/:id",
          element: <ForYourPleasureCoffee />,
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
