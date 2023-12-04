import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import "./home.css";
import Formulario from "../../Components/Formulario/index.jsx";
import { useState } from "react";
import Butt from "../../Components/buttons/Button/index.jsx";
import Solicitudes from "../../Components/Solicitudes/index.jsx";
const Home = () => {
  const [show, setShow] = useState(true);
  const [button1, setButton1] = useState("highlighted");
  const [button2, setButton2] = useState("");

  const opciones = (value) => {
    if (value === 1) {
      setShow(true);
      setButton1("highlighted");
      setButton2("");
    } else if (value === 2) {
      setShow(false);
      setButton1("");
      setButton2("highlighted");
    }
  };
  console.log("button1:", button1);
  console.log("button2:", button2);
  return (
    <>
      <Navbar />
      <div className="container-buttons">
        <Butt
          newclass={`big-buttons ${button1}`}
          prop="Solicitar dia libre"
          value={1}
          click={opciones}
        />
        <Butt
          newclass={`big-buttons ${button2}`}
          prop="Historial de solicitudes"
          value={2}
          click={opciones}
        />
      </div>
      <Layout className={"layout"}>
        {show ? (
          <>
            <div></div>
            <div>
              <Formulario className="formulario" />
            </div>
            <div></div>
          </>
        ) : (
          <Solicitudes />
        )}
      </Layout>
    </>
  );
};

export default Home;
