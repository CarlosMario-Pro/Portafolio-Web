import React from 'react';
import fotoMario from "../../assets/bb.png";
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import {AiFillCodepenCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import WhatsApp from "../WhatsApp/WhatsApp";
import "./AboutMe.css";


export default function AboutMe() {

    return (
        <div className="container-Hero">
            <div className="container-HeroUno"></div>
            <div className="container-photo__Hero">
                <img className="photo-Hero" src={fotoMario} alt="" />
            </div>
            <WhatsApp />
            <div className="container-HeroDos">
                <div className="descriptionHero">
                    <div className="container-HeroName">
                        <h1 className="name">¡Hello World!</h1>
                        <h1 className="nameTwo">Soy Carlos Mario</h1>
                    </div>
                    <p className="esteHero">Soy un desarrollador Full Stack con experiencia en Backend y Frontend. Tengo conocimiento en JavaScript, Next.JS, React.JS y Redux, para construir aplicaciones web escalables y dinámicas.</p>
                    <p className="spanHero">Cuéntame tu proyecto y lo haremos realidad con código.</p>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><FaLinkedin className="linkedin" /></a>
                        <a href="https://codepen.io/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><AiFillCodepenCircle className="codepen" /></a>
                        <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><FaGithub className="github" /></a>
                        <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><BsPinterest className="pinterest" /></a>
                    </div >
                    <a className='linkCVAboutMe' href='https://onedrive.live.com/?cid=884D1EC7FE7CF4C8&id=884D1EC7FE7CF4C8%21112&parId=root&o=OneUp' target="_blank" rel="noopener noreferrer">
                        <button className="button-cv">Descargar CV</button>
                    </a>
                </div>
            </div>
        </div>
    );
};