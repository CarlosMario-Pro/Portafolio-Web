import React from 'react';
import Proyecto1 from "../../assets/Proyectos/E-commerce.png";
import Proyecto2 from "../../assets/Proyectos/Foods.jpg";
import Hotel from "../../assets/Proyectos/Hotel.jpg";
import Proyecto4 from "../../assets//Proyectos/ToDoApp.png";
import Proyecto5 from "../../assets/Proyectos/BlackJack.png";
import Proyecto6 from "../../assets/Proyectos/MemoryGame.png";
import Proyecto7 from "../../assets/Proyectos/Wankayo.png";
import HTML5 from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import JavaScript from '../../assets/JavaScript.svg';
import NodeJS from '../../assets/NodeJS.png';
import NextJS from '../../assets/Next.jsW.png';
import ReactJS from '../../assets/React.png';
import ReduxSVG from '../../assets/Redux.svg';
import MongoDB from '../../assets/MongoDB.png';
import Tailwind from '../../assets/Tailwind.png';
import StyledComponents from '../../assets/Styled-components.png';
import Vite from '../../assets/Vite.png';
import Bootstrap from '../../assets/Bootstrap.png';
import PostgreSQL from '../../assets/PostgreSql.png';
import "./Portfolio.css";


export default function Portfolio () {
    
    return (
        <div className="container-Portfolio">
            <h1>PORTAFOLIO</h1>
            <p>Estos son algunos de los proyectos en los que he trabajado, en ellos he logrado poner a prueba todos mis conocimientos técnicos y de diseño, he utilizado muchos recursos web para hacer realidad la visión de mi cliente, así que... disfruta viéndolos.</p>

            <h2 className='myBeginnings'>Mis trabajos profesionales</h2>
            <div className='container-SectionPortfolio'>
                <div className="individual-SectionPortfolio">
                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1>El Mate Express</h1>
                        </div>
                        <div className=''>
                            <img className="imgProyect" src={Proyecto1} alt="Imagen 3" />
                            <div className='overlay'>
                                <div className='containerTextP-Portfolio'>
                                    <p className='descriptionProject'>Diseño y creación de tienda online, con pasarelas de pago, registro de usuarios, panel de administrador, usuario, seguimiento de órdenes, creación de API y Base de Datos.</p>
                                    <h2>Tecnologías utilizadas</h2>
                                    <div className='unoProject'>
                                        <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ ReactJS } alt="ReactJS" title='ReactJS'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ ReduxSVG } alt="Redux" title='Redux'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ MongoDB } alt="MongoDB" title='MongoDB'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ NodeJS } alt="NodeJS" title='NodeJS'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ Tailwind } alt="Tailwind" title='Tailwind'/></div>
                                    </div>
                                </div>
                            </div>
                            <div className='container-ButtonPortfolio'>
                                <a href="https://carlosmario-pro.github.io/Memory-game-JavaScript/" target="_blank" rel="noreferrer noopener">
                                    <button className='buttonPortfolio'>Demo</button>
                                </a>
                                <a href="https://github.com/CarlosMario-Pro/Memory-game-JavaScript" target="_blank" rel="noreferrer noopener">
                                    <button className='buttonPortfolio'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1 className='h1Ejemplo2'>Hotel</h1>
                        </div>
                        <img className="imgProyect" src={Hotel} alt="Imagen 3" />
                        <div className='overlay'>
                            <div className='containerTextP-Portfolio'>
                                <p className='descriptionProject'>Proyecto para un hotel en la Isla de San Andrés, donde implementé plataforma para reserva de habitaciones, panel de admin para actualizar y crear servicios, reseñas de huéspedes y calificación.</p>
                                <h2>Tecnologías utilizadas</h2>
                                <div className='unoProject'>
                                    <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ NextJS } alt="NextJS" title='NextJS'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ MongoDB } alt="MongoDB" title='MongoDB'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ Tailwind } alt="Tailwind" title='Tailwind'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='container-ButtonPortfolio'>
                            <a href="https://carlosmario-pro.github.io/Memory-game-JavaScript/" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>Demo</button>
                            </a>
                            <a href="https://github.com/CarlosMario-Pro/Memory-game-JavaScript" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-SectionPortfolio'>
                <div className="individual-SectionPortfolio">
                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1>Wankayo</h1>
                        </div>
                        <div className='container-wancayo'>
                            <img className="imgProyect wancayo" src={Proyecto7} alt="Proyecto7" />
                            <div className='overlay'>
                                <div className='containerTextP-Portfolio'>
                                    <p className='descriptionProject'>Creación de plataforma delivery para reconocido restaurante en la ciudad de Huancayo, Perú, para el ingreso de ventas por órdenes y despacho.</p>
                                    <h2>Tecnologías utilizadas</h2>
                                    <div className='unoProject'>
                                        <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ ReactJS } alt="ReactJS" title='ReactJS'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ ReduxSVG } alt="Redux" title='Redux'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ MongoDB } alt="MongoDB" title='MongoDB'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ NodeJS } alt="NodeJS" title='NodeJS'/></div>
                                        <div className='circleIconProject'><img className='iconProject' src={ Tailwind } alt="Tailwind" title='Tailwind'/></div>
                                    </div>
                                </div>
                            </div>
                            <div className='container-ButtonPortfolio'>
                                <a href="https://carlosmario-pro.github.io/Memory-game-JavaScript/" target="_blank" rel="noreferrer noopener">
                                    <button className='buttonPortfolio'>Demo</button>
                                </a>
                                <a href="https://github.com/CarlosMario-Pro/Memory-game-JavaScript" target="_blank" rel="noreferrer noopener">
                                    <button className='buttonPortfolio'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className='myBeginnings'>Mis inicios</h2>
            <div className='container-SectionPortfolio'>
                <div className="individual-SectionPortfolio">
                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1 className='h1Ejemplo2'>SPA I-Foods</h1>
                        </div>
                        <img className="imgProyect" src={Proyecto2} alt="Imagen 3" />
                        <div className='overlay'>
                            <div className='containerTextP-Portfolio'>
                                <p className='descriptionProject'>Diseño y creación de aplicación web sobre cocina, donde puedes ver más de 5000 recetas... y si lo deseas, puedes crear las tuyas propias.</p>
                                <h2>Tecnologías utilizadas</h2>
                                <div className='unoProject'>
                                    <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ ReactJS } alt="ReactJS" title='ReactJS'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ ReduxSVG } alt="Redux" title='Redux'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ PostgreSQL } alt="PostgreSQL" title='PostgreSQL'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ StyledComponents } alt="StyledComponents" title='StyledComponents'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='container-ButtonPortfolio'>
                            <a href="https://github.com/CarlosMario-Pro/PI-Food" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>Demo</button>
                            </a>
                            <a href="https://github.com/CarlosMario-Pro/PI-Food" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>GitHub</button>
                            </a>
                        </div>
                    </div>

                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1 className='h1Ejemplo2'>ToDoApp</h1>
                        </div>
                        <img className="imgProyect" src={Proyecto4} alt="Imagen 3" />
                        <div className='overlay'>
                            <div className='containerTextP-Portfolio'>
                                <p className='descriptionProject'>Mi aplicación para uso diario donde registro mis labores o tareas a ejecutar, Permite regisrar y marcar como completadas aquellas que he dado por terminadas.</p>
                                <h2>Tecnologías utilizadas</h2>
                                <div className='unoProject'>
                                    <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ ReactJS } alt="ReactJS" title='ReactJS'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ ReduxSVG } alt="Redux" title='Redux'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ Tailwind } alt="Tailwind" title='Tailwind'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ Vite } alt="Vite" title='Vite'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='container-ButtonPortfolio'>
                            <a href="https://carlosmario-pro-todoapp.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>Demo</button>
                            </a>
                            <a href="https://github.com/CarlosMario-Pro/ToDoApp" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="individual-SectionPortfolio">
                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1 className='h1Ejemplo2'>BlackJack</h1>
                        </div>
                        <img className="imgProyect" src={Proyecto5} alt="Imagen 3" />
                        <div className='overlay'>
                            <div className='containerTextP-Portfolio'>
                                <p className='descriptionProject'>El juego del dinosaurio de Google cuando no tenemos conexión a internet, pruébalo y trata de conseguir el puntaje más alto. Por cierto, mi record personal es de 3540 puntos.</p>
                                <h2>Tecnologías utilizadas</h2>
                                <div className='unoProject'>
                                    <div className='circleIconProject'><img className='iconProject' src={ HTML5 } alt="HTML5" title='HTML5'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ CSS } alt="CSS" title='CSS3'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ Bootstrap } alt="Bootstrap" title='Bootstrap'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='container-ButtonPortfolio'>
                        <a href="https://theblackjackcm.netlify.app/" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>Demo</button>
                            </a>
                            <a href="https://github.com/CarlosMario-Pro/BlackJackGame" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>GitHub</button>
                            </a>
                        </div>
                    </div>

                    <div className='main_container'>
                        <div className='titleProject'>
                            <h1 className='h1Ejemplo2'>MemoryG</h1>
                        </div>
                        <img className="imgProyect" src={Proyecto6} alt="Imagen 3" />
                        <div className='overlay'>
                            <div className='containerTextP-Portfolio'>
                                <p className='descriptionProject'>Es un juego de memoria donde tendrás que recordar la posición de las fichas, estás permanecerán ocultas miestras no adivines la posición de su pareja.</p>
                                <h2>Tecnologías utilizadas</h2>
                                <div className='unoProject'>
                                    <div className='circleIconProject'><img className='iconProject' src={ HTML5 } alt="HTML5" title='HTML5'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ CSS } alt="CSS" title='CSS3'/></div>
                                    <div className='circleIconProject'><img className='iconProject' src={ JavaScript } alt="JavaScript" title='JavaScript'/></div>
                                </div>
                            </div>
                        </div>
                        <div className='container-ButtonPortfolio'>
                            <a href="https://carlosmario-pro.github.io/MemoryGame/" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>Demo</button>
                            </a>
                            <a href="https://github.com/CarlosMario-Pro/MemoryGame" target="_blank" rel="noreferrer noopener">
                                <button className='buttonPortfolio'>GitHub</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    );
};