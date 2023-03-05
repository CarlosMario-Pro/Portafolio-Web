import React from 'react';
import HTML5 from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import JavaScript from '../../assets/JavaScript.svg';
import NodeJS from '../../assets/NodeJS.png';
import ReactJS from '../../assets/React.png';
import ReduxSVG from '../../assets/Redux.svg';
import Next from '../../assets/Next.jsW.png';
import MongoDB from '../../assets/MongoDB.png';
import PostgreSql from '../../assets/PostgreSql.png';
// import Jest from '../../assets/Jest.png';
import GitHub from '../../assets/GitHub.png';
import Sass from '../../assets/Sass.png';
import Bootstrap from '../../assets/Bootstrap.png';
import StyledComponents from '../../assets/Styled-components.png';
import Less from '../../assets/Less.png';
import Tailwind from '../../assets/Tailwind.png';
import Figma from '../../assets/Figma.png';
import Expressjs from '../../assets/Expressjs.png';
import MaterialUI from '../../assets/Material UI.png';
import TypeScript from '../../assets/New Habilities/TypeScript.png';
import Python from '../../assets/New Habilities/Python.png';
import Illustrator from '../../assets/New Habilities/Illustrator.png';
import Photoshop from '../../assets/New Habilities/Photoshop.png';
import ReactNative from '../../assets/New Habilities/ReactNative.png';
import "./Skills.css";


export default function Skills() {
  
    return (
        <div className="container-Habilities">
            <div className='container-skills'>
                <div className='skills'>
                    <h1>SKILLS</h1>
                    <p>Como desarrollador he aprendido diversas tecnologías, las cuales he aplicado con dedicación y especial detalle, aquí te muestro lo que domino con habilidad</p>
                    <div className='unos'>
                        <div className='containerhabilities'>
                            <img className='habilitieIcon' src={ HTML5 } alt="HTML5" />
                            <span className='habilitieIconP'>HTML5</span>
                            <img className='habilitieIcon' src={ ReactJS } alt="ReactJS" />
                            <span className='habilitieIconP'>ReactJS</span>
                            <img className='habilitieIcon' src={ Sass } alt="Sass" />
                            <span className='habilitieIconP'>Sass</span>
                            <img className='habilitieIcon' src={ Less } alt="Less" />
                            <span className='habilitieIconP'>Less</span>
                            <img className='habilitieIcon' src={ MongoDB } alt="MongoDB" />
                            <span className='habilitieIconP'>MongoDB</span>
                        </div>

                        <div className='containerhabilities'>
                            <img className='habilitieIcon' src={ CSS } alt="CSS3" />
                            <span className='habilitieIconP'>CSS3</span>
                            <img className='habilitieIcon' src={ ReduxSVG } alt="ReduxSVG" />
                            <span className='habilitieIconP'>Redux</span>
                            <img className='habilitieIcon' src={ Bootstrap } alt="Bootstrap" />
                            <span className='habilitieIconP'>Bootstrap</span>
                            <img className='habilitieIcon' src={ StyledComponents } alt="StyledComponents" />
                            <span className='habilitieIconP'>Styled Components</span>
                            <img className='habilitieIcon' src={ PostgreSql } alt="PostgreSql" />
                            <span className='habilitieIconP'>PostgreSQL</span>
                        </div>

                        <div className='containerhabilities'>
                            <img className='habilitieIcon' src={ JavaScript } alt="JavaScript" />
                            <span className='habilitieIconP'>JavaScript ES6</span>
                            <img className='habilitieIcon' src={ Next } alt="Firebase" />
                            <span className='habilitieIconP'>Next.JS</span>
                            <img className='habilitieIcon' src={ Tailwind } alt="Less" />
                            <span className='habilitieIconP'>Tailwind</span>
                            <img className='habilitieIcon' src={ Figma } alt="Figma" />
                            <span className='habilitieIconP'>Figma</span>
                            <img className='habilitieIcon' src={ GitHub } alt="GitHub" />
                            <span className='habilitieIconP'>GitHub</span>
                            {/* <img className='habilitieIcon' src={ Jest } alt="Jest" />
                            <span className='habilitieIconP'>Jest</span> */}
                        </div>
                    </div>

                    <div className='containerhabilitiesN'>
                        <div className='containerhabilitiesDiv'>
                            <img className='habilitieIcon NodeJS' src={ NodeJS } alt="NodeJS" />
                        </div>
                        <div className='containerhabilitiesDiv'>
                            <img className='habilitieIcon Expressjs' src={ Expressjs } alt="Expressjs" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-skillsdesarrollo'>
                <div className='skillsdesarrollo'>
                    <h1>APRENDIENDO</h1>
                    <p>La tecnología está en constante cambio y evolución, por lo que es indispensable tener la pasíon por aprender y potencializar nuestras habilidades</p>
                    <div className='dos'>
                        <div className='containerhabilitiesDos'>
                            <img className='habilitieIcon' src={ TypeScript } alt="TypeScript" />
                            <span className='habilitieIconP'>TypeScript</span>
                            <img className='habilitieIcon' src={ ReactNative } alt="ReactNative" />
                            <span className='habilitieIconP'>React Native</span>
                            <img className='habilitieIcon' src={ Illustrator } alt="Illustrator" />
                            <span className='habilitieIconP'>Illustrator</span>
                        </div>

                        <div className='containerhabilitiesDos'>
                            <img className='habilitieIcon' src={ Python } alt="Python" />
                            <span className='habilitieIconP'>Python</span>
                            <img className='habilitieIcon' src={ MaterialUI } alt="MaterialUI" />
                            <span className='habilitieIconP'>Material UI</span>
                            <img className='habilitieIcon' src={ Photoshop } alt="Photoshop" />
                            <span className='habilitieIconP'>Photoshop</span>
                        </div>
                    </div>
                    <p>Siempre tengo el deseo de superación constante que me impulsa a desarrollar mis habilidades</p>
                </div>
            </div>
        </div>
    );
};