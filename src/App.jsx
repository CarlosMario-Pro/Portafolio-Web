import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import MyServices from "./components/MyServices/MyServices";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Formation from "./components/Formation/Formation";
import Experience from "./components/Experience/Experience";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackTotopButton from "./components/Scroll/BackTotopButton";


export default function App() {

    return (
        <div className="app">
            <NavBar />
            <div className="content">
                <section id="aboutMe"> <AboutMe /> </section>
                <section id="myServices"> <MyServices /> </section>
                <section id="skills"> <Skills /> </section>
                <section id="portfolio"> <Portfolio /> </section>
                <section id="formation"> <Formation /> </section>
                <section id="experience"> <Experience /> </section>
                <section id="testimonials"> <Testimonials /> </section>
                <section id="contact"> <Contact /> </section>


                <Footer />
                <BackTotopButton/>
            </div>
        </div>
    );
};