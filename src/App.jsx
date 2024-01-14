import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BasicInfoPage from "./components/BasicInfoPage";
import Registration from "./components/Registration";
import Jobs from "./components/Jobs";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BasicInfoPage />
    },
    {
      path: "/register",
      element: <Registration />
    },
    {
      path: "/jobs",
      element: <Jobs />
    }
  ])

  return <div>
    <RouterProvider router={appRouter} />
  </div>;
}

export default App;
