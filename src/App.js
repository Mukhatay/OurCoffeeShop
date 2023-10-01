import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Page/Main";
import OurCoffee from "./Page/OurCoffee";
import ForYourPleasure from "./Page/ForYourPleasure";
import Layout from "./components/Layout";
import OneCoffee from "./Page/OneCoffee";
import accountContext from "./context/account/accountContext";
import alertContext from "./context/alert/alertContext";
import { useState } from "react";
import MainProps from "./components/MainProps";
import ToDoList from "./Page/ToDoList";
function App() {
  const [lg, setLg] = useState("KZ");
  const [count, setCount] = useState(100);
  const [secondCount, setSecondCount] = useState(400);
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
          path: "props",
          element: <MainProps />,
        },
        {
          path: "todo",
          element: <ToDoList />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <alertContext.Provider value={[lg, setLg]}>
        <accountContext.Provider
          value={[count, setCount, secondCount, setSecondCount]}
        >
          <RouterProvider router={invariant} />
        </accountContext.Provider>
      </alertContext.Provider>
    </div>
  );
}

export default App;
