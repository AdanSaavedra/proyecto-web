import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import "./home.css";

const Home = () => {

  const data = [
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo.",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo."
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Necesitaba ir a hacer algo."
    }
  ];

  return (
    <>
      <Navbar />
      <Layout>
        <div>testing1</div>
        <div>
          <div id="contenedor-cards">
            {data.map((item, index) => (
              <Card key={index} cosas={item} />
              ))
            }
          </div>
        </div>
        <div>testing3</div>
      </Layout>
    </>
  );
};

export default Home;
