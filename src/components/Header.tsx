import { FC } from 'react';
import Nav from './Nav.tsx';
import '../css/header.css';

const chevronAnimate = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`

const Header : FC = () => {
    return (
        <header>
        <Nav />
         
        <div className='intro'>
            <span>Hi, I'm</span>
            <h1><span className='first-letter'>H</span>eather 👋</h1>
            <h2>I've been crafting accessible & pixel-perfect experiences for over 10 years</h2>
        </div>

        <div className='scroll-down'>
            <a href='#project'>
                <span className='animate-arrow' dangerouslySetInnerHTML={{ __html: chevronAnimate }} />
                <span>see some of my projects</span>
            </a>
        </div>
         
        </header>
    )
}

export default Header;