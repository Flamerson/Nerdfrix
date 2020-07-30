import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import ButtonLink from '../componentes/ButtonLink/Index';
import { Link } from 'react-router-dom';
// função que chama o menu para outras paginas
function Menu() {
    return(
    <nav className="Menu">
        <a href="/">
        <img className='Logo' src={Logo} alt='Nerdfrix filmes' />
        </a>

        <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video" >papoca</ButtonLink>
        </nav>
    )
}

// exportar o Menu para outras paginas xml ou js.
export default Menu;