import React from 'react';
import { GiRibbonMedal } from 'react-icons/gi';
import { FaGraduationCap } from 'react-icons/fa';
import "./Formation.css";


export default function Formation () {

    return (
        <div className="Formation">
            <div className='container-formation'>
                <div className='container-formationUno'>
                    <h1>FORMACION</h1>
                    <p className='container--ExperienceP'>Aquí detallo la formación académica y profesional, la cual me ha permitido obtener los empleos en los que he ejecutado funciones.</p>
                    <div className='container-ExperienceText'>
                        <div className='container-FormationIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><FaGraduationCap className='hoverIcon'/></div>
                                <div className='ExperienceText'>
                                    <h3>Soy Henry</h3>
                                    <h2>FULL STACK</h2>
                                    <p>2022 - 2023</p>
                                </div>
                            </div>
                            <div className='container-ExperienceDescription'>
                                <div className='container-ExperienceDescriptionP'>
                                    <p>Culminé satisfactoriamnte mi formación como Full Stack Developer en el Bootcamp de Soy Henry, con más de 800 horas de código y la aprobación de los proyectos de práctica.</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-FormationIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><GiRibbonMedal className='hoverIcon'/></div>
                                <div className='ExperienceText'>
                                    <h3>freeCodeCamp</h3>
                                    <h2>DEVELOPER</h2>
                                    <p>2022 - 2023</p>
                                </div>
                            </div>
                            <div className='container-ExperienceDescription'>
                                <div className='container-ExperienceDescriptionP'>
                                    <p>Mi formación en esta apreciada plataforma continúa día a día, donde complementé mis conocimientos de JavaScript, React, Redux, Node.js.</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-FormationIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><GiRibbonMedal className='hoverIcon'/></div>
                                <div className='ExperienceText'>
                                    <h3>U. Cooperativa</h3>
                                    <h2>ING. CIVIL</h2>
                                    <p>2012 - 2017</p>
                                </div>
                            </div>
                            <div className='container-ExperienceDescription'>
                                <div className='container-ExperienceDescriptionP'>
                                    <p>10 semestres de Ingeniería Civil en la Universidad Cooperativa de Colombia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};