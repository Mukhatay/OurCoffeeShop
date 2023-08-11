import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Page/Main";
import OurCoffee from "./Page/OurCoffee";
import ForYourPleasure from "./Page/ForYourPleasure";
import CoffeeCatalog from "./components/CoffeeCatalog";

function App() {
  const invariant = createBrowserRouter([
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
  ]);
  return (
    <div className="App">
      <RouterProvider router={invariant} />
    </div>
  );
}

export default App;
