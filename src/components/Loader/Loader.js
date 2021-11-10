import './Loader.css'
import { Spinner } from 'react-bootstrap'



const Loader = () => {
    return (
        <>
            <h1> Cargando...</h1>
            <Spinner animation="border" role="status" variant="light">
                <span className="visually-hidden">Cargando...</span>
            </Spinner>
        </>
    );
};

export default Loader
