import './link-item.css';
import {FiX, FiClipboard} from 'react-icons/fi';

export default function LinkItem({ closeModal }) {
    return (
        <div className='modal-container'>
            <div className='modal-header'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='black'/>
                </button>
            </div>

            <div>
                <span>https://meulink.com/123456</span>
                <button className='modal-link'>
                    https://bit.ly/123456
                    <FiClipboard size={20} color='white'/>
                </button>
            </div>
        </div>

    )

}