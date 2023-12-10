import "./home.css";
import User from "./User";
import Admin from "./Admin";
import { useUser } from "../../CardContext";

const Home = () => {
  const { type } = useUser();
  return type == "1" ? <User /> : <Admin />;
};

export default Home;
