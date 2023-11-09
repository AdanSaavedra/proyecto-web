import { useRoutes, BrowserRouter } from "react-router-dom";
import NotFound from "../NotFound";
import Home from "../Home";
import "./App.css";
import RegistrationForm from "../Register/index.jsx";
import LoginForm from "../SignIn/index.jsx";

const AppRoutes = () => {
  let Routes = useRoutes([
    { path: "/", element: <LoginForm /> },
    { path: "/register", element: <RegistrationForm/> },
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
