import {FiLink} from 'react-icons/fi'
import './home.css';

export default function Home() {
  return(
    <div className="container-home">

      <div className="logo">
        <img src="/linklogo.png" alt="Logo" width="150px" height="auto"/>
        <h1>Links do Chefe</h1>
        <p>Conectando você aos melhores links em um só lugar</p>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color='white'/>
          <input type="text" placeholder="Cole seu link aqui..."/>
        </div>
        <button>Gerar Link</button>
      </div>

    </div>
  )
}