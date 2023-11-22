import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import "./home.css";
import Formulario from "../../Components/Formulario/index.jsx";
import { useState } from "react";
import Butt from "../../Components/buttons/Button/index.jsx";
import Solicitudes from "../../Components/Solicitudes/index.jsx";

const Home = () => {
  const [show, setShow] = useState(true);

  const opciones = (value) => {
    if (value === 1) {
      setShow(true);
    } else if (value === 2) {
      setShow(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-buttons">
        <Butt
          newclass="big-buttons soli"
          prop="Solicitar dia libre"
          value={1}
          click={opciones}
        />
        <Butt
          newclass="big-buttons hist"
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
