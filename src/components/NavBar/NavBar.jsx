import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./NavBar.css";


export default function NavBar () {
    const [activeSection, setActiveSection] = useState('aboutMe');
    const [ menu , setMenu ] = useState( false );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    function handleScroll() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                setActiveSection(section.getAttribute('id'));
            }
        });
    };

    function handleSectionClick(sectionName) {
        setActiveSection(sectionName);
        setMenu(false);

    };

    const toggleMenu = () => {
        setMenu( !menu )
    };


    return (
        <header className="Cabecera">
            <div className='container-logo'>
                <span className='logo-name'>Carlos</span>
                <span className='logo-nameB'>Mario</span>
            </div>
            <button onClick={ toggleMenu } className="Cabecera-button">
                <GiHamburgerMenu className='Cabecera-svg'/>
            </button>
            <nav className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
                <ul className="Cabecera-ul">
                    <li className={`Cabecera-li ${activeSection === 'aboutMe' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#aboutMe" onClick={() => handleSectionClick('aboutMe')}>SOBRE MI</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'myServices' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#myServices" onClick={() => handleSectionClick('myServices')}>SERVICIOS</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'skills' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#skills" onClick={() => handleSectionClick('skills')}>SKILLS</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'portfolio' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#portfolio" onClick={() => handleSectionClick('portfolio')}>PORTAFOLIO</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'formation' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#formation" onClick={() => handleSectionClick('formation')}>FORMACION</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'experience' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#experience" onClick={() => handleSectionClick('experience')}>EXPERIENCIA</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'testimonials' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#testimonials" onClick={() => handleSectionClick('testimonials')}>TESTIMONIOS</a>
                    </li>
                    <li className={`Cabecera-li ${activeSection === 'contact' ? 'Cabecera-li--active' : ''}`}>
                        <a className="Cabecera-a" href="#contact" onClick={() => handleSectionClick('contact')}>CONTACTO</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};