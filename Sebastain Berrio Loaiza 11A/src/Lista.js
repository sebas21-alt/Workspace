import './Lista.js';
import Estudiante from './Estudiante';
import './Lista.css';
import './App';
function Lista({ listaestudiantes }) {
    return (
        <div className='lista'>
            <ol>
                {estudiantes.map((elemento, index) => (
                   <li> <Estudiante nombre={elemento.nombre}
                    apellido={elemento.apellido} /></li>
                ))}
            </ol>

        </div>
    )
}

export default Lista;