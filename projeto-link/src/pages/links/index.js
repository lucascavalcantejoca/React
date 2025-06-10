import './links.css';
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi';

export default function Links() {
  return(
    <div className="links-container">

      <div className='links-header'>
        <FiArrowLeft size={38} color='white'/>
        <h1>Meus Links</h1>
      </div>

      <div className='links-item'>
        <FiLink size={18} color='white'/>
        <button>https://www.youtube.com/</button>
        <button>
          <FiTrash size={24} color='#FF5454'/>
        </button>
      </div>

    </div>
  )
}