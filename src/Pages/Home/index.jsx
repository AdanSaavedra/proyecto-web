import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import "./home.css";
import Historial from "../../Components/buttons/Historial/index.jsx";
import Solicitudes from "../../Components/buttons/Solicitar/index.jsx";
import Aceptados from "../../Components/buttons/Aceptados/index.jsx";
import Espera from "../../Components/buttons/En_espera";
import Rechazados from "../../Components/buttons/Rechazados";
import Formulario from "../../Components/Formulario/index.jsx";

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

  return (
    <>
      <Navbar />
      <div className="container-buttons">
        <Solicitudes/>
        <Historial/>
      </div>
      <Layout>
        <div className="buttons">
          <Espera/>
          <Aceptados/>
          <Rechazados/>
        </div>
        <div>
          <Formulario className="formulario"/>
          <div id="contenedor-cards">
            {data.map((item, index) => (
              <Card key={index} cosas={item} />
              ))
            }
          </div>
          <div className="bottom-fade"></div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
