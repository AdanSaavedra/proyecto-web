import "./home.css";
import User from "./User";
import Admin from "./Admin";
import { useUser } from "../../CardContext";

const Home = () => {
  const { type } = useUser();
  return(
    <>
    {type == "1" ? <User /> : null}
    {type == "2" ? <Admin /> : null}
    </>
  );
};

export default Home;
