import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "./data";
import "./Testimonials.css";


export default function Testimonials () {

    return (
        <div className="Slider">
            <h1>TESTIMONIOS</h1>
            <div className="container-Slider">
                <div className='slider'>
                    <Slider autoplay autoplaySpeed={6000} infinite >
                        {
                            data.map((item, index) => (
                                <div key={index} className="Testimoniosdemas">
                                    <img src={item.image} alt={item.name} />
                                    <p><span className="comillas">"</span>{item.testimonial}<span className="comillas">"</span></p>
                                    <h3>{item.name}</h3>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};