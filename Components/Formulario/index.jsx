import "./formulario.css"
import { useState } from 'react';
    
const Formulario = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleStartDateChange = (event) => {
        if (new Date(event.target.value) <= new Date()) {
            alert('La fecha de inicio no puede ser menor a la fecha actual');
        }else{
            setStartDate(event.target.value);
            checkFields(event.target.value, endDate);
        }
    };

    const handleEndDateChange = (event) => {
        if (new Date(event.target.value) <= new Date(startDate)) {
            alert('La fecha final no puede ser menor a la fecha de inicio');
        } else {
            setEndDate(event.target.value);
            checkFields(startDate, event.target.value);
        }
    };

    //Para validar que los campos esten llenos
    const checkFields = (startDate, endDate) => {
        if (startDate !== '' && endDate !== '' && endDate > startDate) {
        setIsButtonDisabled(false);
        } else {
        setIsButtonDisabled(true);
        }
    };

    return (
        <div className="formulario">
            <form className="form-sol-cont">
                <div>
                    <label htmlFor="inicio" className="label-sol">Fecha de inicio</label> <br/>
                    <input type="date" id="inicio" name="inicio" className="form-sol" value={startDate} onChange={handleStartDateChange} required/>
                </div>
                <div>
                    <label htmlFor="final" className="label-sol final">Fecha final</label><br/>
                    <input type="date" id="final" name="final" className="form-sol" value={endDate} min={startDate} onChange={handleEndDateChange} required/> 
                </div>
                <div>
                    <label htmlFor="descripcion" className="label-sol">Descripcion</label><br/>
                    <textarea id="descripcion" name="descripcion" className="form-sol" required/>
                </div>
                <div>
                    <label htmlFor="motivo" className="label-sol">Motivo</label><br/>
                    <select name="motivo" id="motivo-form" required>
                        <option value="Urgencia">Urgencia</option>
                        <option value="Personal">Personal</option>
                        <option value="Vacaciones">Vacaciones</option>
                        <option value="Otro">Otro</option>
                    </select>
                    
                    <div id="submit_cont">
                        <button type="submit" id="submit" className={isButtonDisabled ? 'disabled' : ''} disabled={isButtonDisabled}>Solicitar</button>
                    </div>
                </div>
            </form>     
        </div>
    )
}

export default Formulario