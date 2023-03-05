import React from 'react';
import { BsBank2 } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import "./Experience.css";


export default function Experience () {
    
    return (
        <div className="Experience">
            <div className='container-services'>
                <div className='container-Experience'>
                    <h1>EXPERIENCIA</h1>
                    <p className='container-ExperienceP'>Estos son parte de mis trabajos como Full Stack Developer y como Profesional, cabe mencionar que en mi repositorío personal de GitHub reposan muchos más trabajos, los cuales puedes verificar <a className='linkGitHubExperience' href="https://github.com/CarlosMario-Pro?tab=repositories" target="_blank" rel="noopener noreferrer">aquí</a>.</p>
                    <div className='container-ExperienceText'> 
                        <div className='container-ExperienceIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><FaCode className='hoverIcon'/></div>
                                <div className='container--ExperienceText'>
                                    <h3>Soy Henry</h3>
                                    <h2>DEVELOPER</h2>
                                    <p>2022 - 2023</p>
                                </div>
                            </div>
                            <div className='container--ExperienceDescription'>
                                <div className='container--ExperienceDescriptionP'>
                                    <p>Diseño y creación de e-commerce para empresa dedicada al comercio en línea, donde implementamos pasarelas de pago, registro de usuarios, panel de admin, manejo de inventarios, creación de productos, notificaciones de información a clientes, etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-ExperienceIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><FaCode className='hoverIcon'/></div>
                                <div className='container--ExperienceText'>
                                    <h3>Soy Henry</h3>
                                    <h2>DEVELOPER</h2>
                                    <p>2022 - 2023</p>
                                </div>
                            </div>
                            <div className='container--ExperienceDescription'>
                            <div className='container--ExperienceDescriptionP'>
                                    <p>Diseño y creación de SPA para cliente con temática relacionada a recetas de cocina, consumo de API para mostrar más de 5000 recetas, permitiendo a los usuarios, poder nutrir la base de datos creando sus propias recetas.</p>
                                </div>
                            </div>
                        </div>

                        <div className='container-ExperienceIndividual'>
                            <div className='container-ExperienceIconText'>
                                <div className='container--ExperienceIcon'><BsBank2 className='hoverIcon'/></div>
                                <div className='container--ExperienceText'>
                                    <h3>Banco de Bogotá</h3>
                                    <h2>EJECUTIVO</h2>
                                    <p>2013 - 2021</p>
                                </div>
                            </div>
                            <div className='container--ExperienceDescription'>
                            <div className='container--ExperienceDescriptionP'>
                                    <p>Me desempeñé en diversos cargos relacionados con el cumplimiento de metas, administración operativa de oficinas bancarias, administración de personal y fortalecimiento de relaciones empresariales con clientes relevantes de esta entidad bancaria.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p></p>
                    </div>
                </div>

            </div>
        </div>
    );
};
//Redacción de contenido textual del sitio web, descripciones
//Investigación de leyes y normativa legal pertinente de acuerdo con la actividad económica que desees practicar