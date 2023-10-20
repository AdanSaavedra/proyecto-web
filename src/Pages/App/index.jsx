import { useRoutes, BrowserRouter } from "react-router-dom";
import SignIn from "../SignIn";
import Register from "../Register";
import NotFound from "../NotFound";
import Home from "../Home";
import "./App.css";

const AppRoutes = () => {
  let Routes = useRoutes([
    { path: "/", element: <SignIn /> },
    { path: "/register", element: <Register /> },
    { path: "/home", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return Routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
