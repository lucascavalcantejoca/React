import {FiLink} from 'react-icons/fi'
import './home.css';
import Menu from '../../components/Menu';
import { useState } from 'react';

import LinkItem from '../../components/LinkItem';

export default function Home() {

  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);

  function meuLink() {
    setShowModal(true);
  }

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
          <input
           type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            />
        </div>
        <button onClick={meuLink}>Gerar Link</button>
      </div>

      <Menu/>
      {showModal && <LinkItem closeModal={()=> setShowModal(false)}/>}
    </div>
  )
}