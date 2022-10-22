import React, { useState } from "react";
import Router from 'next/router'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from "next/image";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import test from '../public/assets/img/341.png'
// import "pure-react-carousel/dist/react-carousel.es.css";

import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'
import styles from '../styles/components/tournaments.module.sass'

const Terminal = (props) => {
    const data = [
        {
          icon: <IoTennisball className='tennisIcon customSvgSlider' />,
          img : <IoTennisball className="iconSmall customSvgSlider" />,
          style: {
                borderColor:'red',

            }
        },
        {
            icon: <IoFootball className='footballIcon customSvgSlider' />,
            img: <IoFootball className="iconSmall customSvgSlider" />
        },
        {
            icon: <MdSportsCricket className='cricketIcon customSvgSlider' />,
            img: <IoFootball className="iconSmall customSvgSlider" />
        },
        {
            icon: <IoFootball className='footballIcon customSvgSlider' />,
            img: <IoFootball className="iconSmall customSvgSlider" />
        },
        {
            icon: <MdSportsCricket className='cricketIcon customSvgSlider' />,
            img: <IoFootball className="iconSmall customSvgSlider" />
        },
      ];
    return (
        <CarouselProvider
        naturalSlideWidth={700}
        naturalSlideHeight={100}
        totalSlides={data.length}
        visibleSlides={3}
        className='sliderMain tournaments'
      >
        <div className={[styles.header]} >
            <div className={[styles.title]}>
                <IoFootball className={[styles.football]} /> Tournaments
            </div>
            <div className='sliderButtons'>
                <ButtonBack className=""><FiChevronLeft size="1.5em"  /></ButtonBack>
                <ButtonNext className=""><FiChevronRight size="1.5em"  /></ButtonNext>
            </div>
        </div>
        <Slider>        
            <Slide >
                <div className={styles.tournamentsList}>
                    {data.map((item, index) => (
                            <div key={index} index={index} className={[styles.listData]} style={item.style}>
                                {/* <div> */}
                                    {item.icon}
                                    {item.img}
                                    {item.img}
                                    {item.img}
                                    {item.img}
                                    {/* <Image src={item.img} alt="alt" />
                                    <Image src={item.img} alt="alt" />
                                    <Image src={item.img} alt="alt" />
                                    <Image src={item.img} alt="alt" /> */}
                            </div>
                        ))}
                </div>
            
            </Slide>
        </Slider>
        
      </CarouselProvider>
    )
  }
//   })
  
export default Terminal