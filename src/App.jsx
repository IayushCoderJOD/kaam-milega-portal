import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header";
import BasicInfoPage from "./components/BasicInfoPage";
import Registration from "./components/Registration";
import Jobs from "./components/Jobs";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./constants/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./slices/UserSLice";
import BrowsePage from "./components/BrowsePage";
import Companies from "./components/Companies";
import Profile from "./components/Profile";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  console.log(user);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <BasicInfoPage />
    },
    {
      path: "/profile",
      element: !user ? <BasicInfoPage /> : <Profile />
    },
    {
      path: "/register",
      element: user ? <BasicInfoPage /> : <Registration />
    },
    {
      path: "/jobs",
      element: !user ? <BasicInfoPage /> : <Jobs />
    },
    {
      path: "/companies",
      element: !user ? <BasicInfoPage /> : <Companies />
    },
    {
      path: "/browse",
      element: !user ? <BasicInfoPage /> : <BrowsePage />
    }
  ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])
  return <div>
    <RouterProvider router={appRouter} />
  </div>;
}

export default App;
