import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiFillCodepenCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import "./Footer.css";


export default function Footer () {
    
    return (
        <div className="footer">
            <div className='container-footer'>
                <div className='container-footerName'>
                    <span className='container-footerNameA'>Carlos</span>
                    <span className='container-footerNameB'>Mario</span>
                </div>
                <div className='container-footerLinks'>
                    <div className='container-footerLinksUno'>
                        <a className='footerLinksAboutMe' href="#aboutMe">ABOUT ME</a>
                        <a className='footerLinksMyServices' href="#myServices">SERVICES</a>
                        <a className='footerLinksSkills' href="#skills">SKILLS</a>
                        <a className='footerLinksFormation' href="#formation">FORMATION</a>
                    </div>
                    <div className='container-footerLinksDos'>
                        <a className='footerLinksExperience' href="#experience">EXPERIENCE</a>
                        <a className='footerLinksPortfolio' href="#portfolio">PORTFOLIO</a>
                        <a className='footerLinksTestimonials' href="#testimonials">TESTIMONIALS</a>
                        <a className='footerLinksContact' href="#contact" >CONTACT</a>
                    </div>
                </div>
                
                <div className="social-mediaFooter">
                    <div className="circle-mediaFooter">
                        <a href="https://www.linkedin.com/in/carlosmario-pro/" target="_blank" rel="noreferrer noopener"><ImLinkedin2 className="linkedinFooter" /></a>
                    </div>
                    <div className="circle-mediaFooter">
                        <a href="https://codepen.io/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><AiFillCodepenCircle className="codepenFooter" /></a>
                    </div>
                    <div className="circle-mediaFooter">
                        <a href="https://github.com/CarlosMario-Pro" target="_blank" rel="noreferrer noopener"><FaGithub className="githubFooter" /></a>
                    </div>
                    <div className="circle-mediaFooter">
                        <a href="https://co.pinterest.com/CarlosMarioPro/" target="_blank" rel="noreferrer noopener"><BsPinterest className="pinterestFooter" /></a>
                    </div>
                </div >
            </div>
            <p className='copyRight'>© 2023 Carlos Mario. Todos los Derechos Reservados.</p>
        </div>
    );
};