import React from 'react';
import { FaRegCreditCard } from 'react-icons/fa';
import { GiThunderball } from 'react-icons/gi';
import { BsVectorPen } from 'react-icons/bs';
import { GoTools, GoDeviceDesktop } from 'react-icons/go';
import { AiFillAndroid } from 'react-icons/ai';
import "./MyServices.css";


export default function Formation () {
    
    return (
        <div className="services">
            <h1>MIS SERVICIOS</h1>
            <div className='container-MyServices'>
                <div className='myServices'>
                    <h1>DISEÑO WEB</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><BsVectorPen className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'>
                            <p>Diseñaré la interfaz gráfica de tu sitio web aplicando UX / UI Design.</p>
                        </div>
                    </div>
                </div>

                <div className='myServices'>
                    <h1>DESARROLLO WEB</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><GoDeviceDesktop className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'>
                            <p>Aplicaré las tecnologías que domino para hacer dinámica y escalable tu visión de proyección mundial.</p>
                        </div>
                    </div>
                </div>

                <div className='myServices'>
                    <h1>E-COMMERCE</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><FaRegCreditCard className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'>
                            <p>Implementaré pasarelas de pago como Paypal, Square, Stripe, para un alcance global.</p>
                        </div>
                    </div>
                </div>

                <div className='myServices'>
                    <h1>MANTENIMIENTO</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><GoTools className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'>
                            <p>Actualizaré tu sitio y resolveré los bugs que impidan un correcto funcionamiento de tu web.</p>
                        </div>
                    </div>
                </div>

                <div className='myServices'>
                    <h1>OPTIMIZACION</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><GiThunderball className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'><p>Optimizare la velocidad de tu sitio web para mejorar la experiencia de navegación.</p>
                        </div>
                    </div>
                </div>

                <div className='myServices'>
                    <h1>HOSTING AND DOMAIN</h1>
                    <div className='gridMyServices'>
                        <div className='gridMyServicesOne'><AiFillAndroid className="iconsMyServices" /></div>
                        <div className='gridMyServicesTwo'>
                            <p>Tu hosting, dominio web y correo corporativo con tu marca personal en colaboración con Hostinger.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};