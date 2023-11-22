import Card from "../Card";
import Butt from "../buttons/Button";
import { Modal } from "../../Modal";
import DetalleSolicitud from "../DetalleSolicitud";
import { CardContext } from "../../CardContext";
import { useContext } from "react";

const Solicitudes = () => {
  const context = useContext(CardContext);
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
      {context.openModal && (
        <Modal>
          <DetalleSolicitud />
        </Modal>
      )}
    </>
  );
};

export default Solicitudes;
