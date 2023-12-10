import { useState } from "react";
import Navbar from "../../Components/Navbar";
import Butt from "../../Components/buttons/Button";
import Layout from "../../Components/Layout";
import Formulario from "../../Components/Formulario";
import Solicitudes from "../../Components/Solicitudes";
import Historial from "../../Components/Solicitudes/Historial";

const Admin = () => {
  const [show, setShow] = useState("1");
  const [button1, setButton1] = useState("highlighted");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");

  const opciones = (value) => {
    if (value === 1) {
      setShow("1");
      setButton1("highlighted");
      setButton2("");
      setButton3("");
    } else if (value === 2) {
      setShow("2");
      setButton1("");
      setButton2("highlighted");
      setButton3("");
    } else if (value === 3) {
      setShow("3");
      setButton1("");
      setButton2("");
      setButton3("highlighted");
    }
  };
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
          newclass={`big-buttons ${button3}`}
          prop="Solicitudes pendientes"
          value={3}
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
        {show === "1" ? (
          <>
            <div></div>
            <div>
              <Formulario className="formulario" />
            </div>
            <div></div>
          </>
        ) : null}
        {show == "2" ? <Solicitudes /> : null}
        {show == "3" ? <Historial /> : null}
      </Layout>
    </>
  );
};
export default Admin;
// {show == "1" ? (
//     <>
//   <div></div>
//   <div>
//     <Formulario className="formulario" />
//   </div>
//   <div></div>
//     </>
//   ) : (
//     <Solicitudes />
//   )}
