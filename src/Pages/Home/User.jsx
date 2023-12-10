import { useState } from "react";
import Formulario from "../../Components/Formulario";
import Layout from "../../Components/Layout";
import Navbar from "../../Components/Navbar";
import Solicitudes from "../../Components/Solicitudes";
import Butt from "../../Components/buttons/Button";

const User = () => {
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
  return (
    <div>
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
    </div>
  );
};

export default User;
