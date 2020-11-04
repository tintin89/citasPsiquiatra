import React from "react"
import '../../styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideElement from "./SlideElement";
import consulta from "../assets/consulta.jpg";
import psico from "../assets/consulta2.jpg";
import psicof from "../assets/familiar.jpg";
import pareja from "../assets/pareja.jpg";
import grupo from "../assets/grupo.jpg";



const Information =(props)=>{

      const  servicios=[
            {
                nombre:"Psicoterapia Individual",
                imagen:consulta
            },
            {
                nombre:"Consulta de Neuro Psiquiatría",
                imagen:psico
            },
            {
                nombre:"Psicoterapia Familiar",
                imagen:psicof
            },
            {
                nombre:"Psicoterapia de Pareja",
                imagen:pareja
            },
            {
                nombre:"Psicoterapia de Grupo",
                imagen:grupo
            }
        ]


        return (
            <div className="Information" style={{
                filter:props.blur ? "blur(3px)" : "none",
                transform:props.show ? 'translateX(-100vh)' : 'translateX(0)',
                opacity: props.show ? '0' : '1',

                 }}>
                <div className="SliderContainer">
                    <Slider
                        pauseOnHover={false}
                        fade={true}
                        infinite={true}
                        speed={800}
                        slidesToShow={1}
                        slidesToScroll={1}
                        arrows={false}
                        autoplaySpeed={4000}
                        autoplay={true}

                    >
                        {servicios.map(s=>{
                            return <SlideElement
                                imagen={s.imagen}
                                description={s.nombre}
                                key={s.nombre}
                            />
                        })}

                    </Slider>
                </div>
            </div>
        )

}


export default Information
