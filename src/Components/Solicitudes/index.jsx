import Card from "../Card";
import Butt from "../buttons/Button";
import { Modal } from "../../Modal";
import DetalleSolicitud from "../DetalleSolicitud";
import { CardContext } from "../../CardContext";
import { useContext, useState, useEffect } from "react";

const Solicitudes = () => {
  const context = useContext(CardContext);
  const [historial, setHistorial] = useState([]);
  const [filter, setFilter] = useState('En espera');
  useEffect(() => {
    // Hacer la solicitud a la API para obtener el historial de solicitudes
    fetch('http://localhost/backend/historial_api.php')
      .then(response => response.json())
      .then(data => setHistorial(data))
      .catch(error => console.error('Error fetching historial:', error));
  }, []);
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
      status: "Rechazado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera",
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
      status: "Rechazado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera",
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
      status: "Rechazado",
    },
    {
      inicio: "12-10-2023.",
      final: "14-10-2023.",
      descripcion: "Urgencia.",
      motivo: "Ayala verga está fuckup hacer todo este hp trabajo",
      status: "En espera",
    },
  ];
  
  return (
    <>
      <div className="buttons">

        <Butt prop="En espera" newclass="en-espera" click={() => setFilter('En espera')} />
        <Butt prop="Aceptados" newclass="aceptados" click={() => setFilter('Aceptado')} />
        <Butt prop="Rechazados" newclass="rechazados" click={() => setFilter('Rechazado')} />
      </div>
      <div>
      <div id="contenedor-cards">
          {historial.map((item, index) => (
            item.status === filter && <Card key={index} cosas={item} />
          ))}
        </div>
        <div className="bottom-fade"></div>
      </div>
      {context.openModal && (
        <Modal>
          <DetalleSolicitud />
        </Modal>
      )}
    </>
  );
};

export default Solicitudes;
