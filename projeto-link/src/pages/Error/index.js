import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div className="container-error">
            <img src='/error404.png' alt='Página não encontrada'/>
            <h1>Página não encontrada</h1>
            <Link to='/'>
                Voltar para a Home
            </Link>
        </div>
    );
}