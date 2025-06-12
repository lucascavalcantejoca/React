import './menu.css';
import {BsYoutube, BsInstagram} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function Menu() {
    return (
        <div className='menu'>
            <a className='social' href='https://www.youtube.com/' target='_blank'>
                <BsYoutube color='white' size={24}/> 
            </a>
            <a className='social' href='https://www.instagram.com/' target='_blank'>
                <BsInstagram color='white' size={24}/> 
            </a>
            <Link to={'links'} className='menu-item'>
                Meus Links
            </Link>
        </div>
    )
}