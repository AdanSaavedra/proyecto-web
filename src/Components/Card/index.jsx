import "./card.css"
const Card = ( {cosas}) => {
    return (
        <div className="card">
           
            <p>Inicio: {cosas[0]}</p>
            <p>Final: {cosas[1]}</p>
            <p>Motivo: {cosas[2]}</p>
            {/* <div>{children.motivos[0].status}</div> */}
        </div>
    );
}

 export default Card;