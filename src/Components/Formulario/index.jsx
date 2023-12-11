import "./formulario.css"
import { useState } from 'react';
import { useUser } from '../../CardContext'

const Formulario = () => {
    const { userId } = useUser();
    console.log('userId:', userId);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [formSuccess, setFormSuccess] = useState(false);
    const [formError, setFormError] = useState(null);

    const handleStartDateChange = (event) => {
        if (new Date(event.target.value) <= new Date()) {
            alert('La fecha de inicio no puede ser menor a la fecha actual');
        } else {
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

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Cuerpo de la solicitud:', JSON.stringify({
            Motivo: event.target.motivo.value,
            Fecha_inicio: startDate,
            Fecha_Final: endDate,
            descripcion: event.target.descripcion.value,
            userId: userId,
        }));
        try {
            const response = await fetch('http://localhost/backend/solicitud_proceso.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `Motivo=${encodeURIComponent(event.target.motivo.value)}&Fecha_inicio=${encodeURIComponent(startDate)}&Fecha_Final=${encodeURIComponent(endDate)}&descripcion=${encodeURIComponent(event.target.descripcion.value)}&userId=${encodeURIComponent(userId)}`,

            })

            const data = await response.json();
            console.log('response', data)

            if (response.ok) {
                console.log('Solicitud realizada correctamente');
                setFormSuccess(true);
                setFormError(null);
                setTimeout(() => {
                    // Redirigir o realizar alguna acción después de un éxito
                }, 3000);
            }
            else {
                console.error('Error al realizar la solicitud:', data.message);
                setFormError('Error al realizar la solicitud. Por favor, inténtalo de nuevo.');
                setFormSuccess(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setFormError('Error al realizar la solicitud. Por favor, inténtalo de nuevo más tarde.');
            setFormSuccess(false);
        }
    };

    return (




        <div className="formulario">
            <form className="form-sol-cont" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="inicio" className="label-sol">Fecha de inicio</label> <br />
                    <input type="date" id="inicio" name="inicio" className="form-sol" value={startDate} onChange={handleStartDateChange} required />
                </div>
                <div>
                    <label htmlFor="final" className="label-sol final">Fecha final</label><br />
                    <input type="date" id="final" name="final" className="form-sol" value={endDate} min={startDate} onChange={handleEndDateChange} required />
                </div>
                <div>
                    <label htmlFor="descripcion" className="label-sol">Descripcion</label><br />
                    <textarea id="descripcion" name="descripcion" className="form-sol" required />
                </div>
                <div>
                    <label htmlFor="motivo" className="label-sol">Motivo</label><br />
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
            </form> {/* Contenedor para mensajes de éxito y error */}
             <div className="form-message-container">
                {/* Mensajes de éxito y error dentro del formulario */}
                {formSuccess && (
                    <div className="form-success-alert">
                        <p>Solicitud realizada correctamente.</p>
                    </div>
                )}
                {formError && <div className="form-error-message">{formError}</div>}
            </div>
            
        </div>
    )
}

export default Formulario