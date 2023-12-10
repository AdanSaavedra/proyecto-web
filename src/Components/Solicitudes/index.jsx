import Card from "../Card";
import Butt from "../buttons/Button";
import { Modal } from "../../Modal";
import DetalleSolicitud from "../DetalleSolicitud";
import { CardContext } from "../../CardContext";
import { useContext, useState, useEffect } from "react";

const Solicitudes = () => {
  const context = useContext(CardContext);
  const [button3, setButton3] = useState("highlighted");
  const [button4, setButton4] = useState("");
  const [button5, setButton5] = useState("");
  useEffect(() => {
    // Hacer la solicitud a la API para obtener el historial de solicitudes
    fetch("http://localhost:8000/historial_api.php")
      .then((response) => response.json())
      .then((data) => context.setHistorial(data))
      .catch((error) => console.error("Error fetching historial:", error));
  }, []);

  const opciones = (value) => {
    if (value === 3) {
      setButton3("highlighted");
      setButton4("");
      setButton5("");
    } else if (value === 4) {
      setButton3("");
      setButton4("highlighted");
      setButton5("");
    } else {
      setButton3("");
      setButton4("");
      setButton5("highlighted");
    }
  };

  return (
    <>
      <div className="buttons">
        <Butt
          prop="En espera"
          newclass={button3}
          click={opciones}
          value={3}
          setfil={() => setFilter("En espera")}
        />
        <Butt
          prop="Aceptados"
          newclass={button4}
          click={opciones}
          value={4}
          setfil={() => setFilter("Aceptado")}
        />
        <Butt
          prop="Rechazados"
          newclass={button5}
          click={opciones}
          value={5}
          setfil={() => setFilter("Rechazado")}
        />
      </div>
      <div>
        <div id="contenedor-cards">
          {context.historial.length === 0 && (
            <p id="nohay">No hay solicitudes</p>
          )}
          {context.historial.map((item, index) => (
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
