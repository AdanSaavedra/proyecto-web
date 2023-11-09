import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import "./home.css";
import Formulario from "../../Components/Formulario/index.jsx";
import { useState } from 'react';
import Butt from "../../Components/buttons/Button/index.jsx";

const Home = () => {

  const data = [
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo. Porque estoy chucha madre kb",
      status: "En espera",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Aceptado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Rechazado"
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera"
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo. Porque estoy chucha madre kb",
      status: "En espera",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Aceptado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Rechazado"
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera"
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo. Porque estoy chucha madre kb",
      status: "En espera",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Aceptado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "Rechazado"
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera"
    }
  ];

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
        <Butt newclass="big-buttons soli" prop="Solicitar dia libre" value={1} click={opciones} />
        <Butt newclass="big-buttons hist" prop="Historial de solicitudes" value={2} click={opciones} />
      </div>
      <Layout>
        {show ? (
          <>
            <div></div>
            <div>
              <Formulario className="formulario" />
              <div className="bottom-fade"></div>
            </div>
            <div></div>
          </>
        ) : (
          <>
            <div className="buttons">
              <Butt prop="En espera" newclass="en-espera" />
              <Butt prop="Aceptados" newclass="aceptados" />
              <Butt prop="Rechazados" newclass="rechazados" />
            </div>
            <div>
              <div id="contenedor-cards">
                {data.map((item, index) => (
                  <Card key={index} cosas={item} />
                ))}
              </div>
              <div className="bottom-fade"></div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Home;
