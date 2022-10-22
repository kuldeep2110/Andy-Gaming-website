import React, { useState } from "react";
import Router from 'next/router'
import styles from '../styles/components/interface.module.sass'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
  } from "pure-react-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Ocean from "../public/mm.png";
import "pure-react-carousel/dist/react-carousel.es.css";

import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'

const Terminal = (props) => {
    const data = [
        {
          title: "Tennis",
          icon: <IoTennisball className='tennisIcon customSvgSlider' />,
          cardText: "here is some random text",
          src: Ocean,
          scoreLeft : 1,
          teamLeft: 'Tennis Team 1',
          percentLeft: '50%',

          scoreRight : 1,
          teamRight: 'Tennis Team 2',
          percentRight: '50%',
        },
        {
            title: "Football",
            icon: <IoFootball className='tennisIcon customSvgSlider' />,
            cardText: "here is some random text",
            src: Ocean,
            scoreLeft : 1,
            teamLeft: 'Football Team 1',
            percentLeft: '50%',
  
            scoreRight : 1,
            teamRight: 'Football Team 2',
            percentRight: '50%',
        },
        {
            title: "Cricket",
            icon: <MdSportsCricket className='tennisIcon customSvgSlider' />,
            cardText: "here is some random text",
            src: Ocean,
            scoreLeft : 1,
            teamLeft: 'Cricket Team 1',
            percentLeft: '50%',
  
            scoreRight : 1,
            teamRight: 'Cricket Team 2',
            percentRight: '50%',
        }
      ];
    return (
        <CarouselProvider
        naturalSlideWidth={700}
        naturalSlideHeight={300}
        totalSlides={data.length}
        visibleSlides={1}
        className='sliderMain'
      >
        <Slider>
        {data.map((item, index) => (
            <Slide key={index} index={index}>
                <div className="contentHolderSlider">
                    {item.icon}
                    {item.title}
                </div>

                <Container className="containerLayout">
                    <Row className="rowLayout">
                        <Col className="col-3 teamLeft">
                            <div className="sportsRelative">
                                {/* <div className="scoreRange">
                                    {item.icon}
                                    <div className="percentScore">
                                        {item.percentLeft}
                                    </div>
                                </div> */}
                                <div className="sportIcon">{item.icon}</div>
                                <svg width="200" height="200" viewBox="0 0 200 200">
                                    <circle className="circle-background" cx="100" cy="100" r="95" strokeWidth="10px"></circle>
                                    <circle className="circle-progress" cx="100" cy="100" r="95" strokeWidth="10px" transform="rotate(145 100 100)" style={{strokeDasharray: '596.903', strokeDashoffset: '179.071'}}></circle>
                                    <text className=" percentScore" x="50%" y="50%" dy=".3em" textAnchor="middle">{item.percentLeft}</text>
                                </svg>
                                <div className="percentScore">
                                        {item.percentRight}
                                </div>
                            </div>
                            <div className="teamName">
                                {item.teamLeft}
                            </div>
                        </Col>

                        <Col className="col-3 teamCenter">
                            <div className="team_vs">
                                <div><hr /></div>
                                    <div>VS</div>
                                <div><hr /></div>
                            </div>
                            <div className="team_vs_score">
                                <div>
                                    <label>{item.scoreLeft}</label>
                                    <label>{item.percentLeft}</label>
                                </div>
                                <div>
                                    <label>{item.scoreRight}</label>
                                    <label>{item.percentRight}</label>
                                </div>
                            </div>
                        </Col>

                        <Col className="col-3 teamRight">
                            {/* <div>
                                <div className="scoreRange">
                                    {item.icon}
                                    <div className="percentScore">
                                        {item.percentRight}
                                    </div>
                                </div>
                            </div>
                            <div  className="teamName">
                                {item.teamRight}
                            </div> */}
                            <div className="sportsRelative">
                                <div className="sportIcon">{item.icon}</div>
                                <svg width="200" height="200" viewBox="0 0 200 200">
                                    <circle className="circle-background" cx="100" cy="100" r="95" strokeWidth="10px"></circle>
                                    <circle className="circle-progress" cx="100" cy="100" r="95" strokeWidth="10px" transform="rotate(145 100 100)" style={{strokeDasharray: '596.903', strokeDashoffset: '179.071'}}></circle>
                                    <text className=" percentScore" x="50%" y="50%" dy=".3em" textAnchor="middle">{item.percentLeft}</text>
                                </svg>
                                <div className="percentScore">
                                        {item.percentRight}
                                </div>
                            </div>
                            <div className="teamName">
                                {item.teamRight}
                            </div>
                        </Col>
                    </Row>
                    <Col className="col-3 teamCenter smallTeamCenter">
                            <div className="team_vs">
                                <div><hr /></div>
                                    <div>VS</div>
                                <div><hr /></div>
                            </div>
                            <div className="team_vs_score">
                                <div>
                                    <label>{item.scoreLeft}</label>
                                    <label>{item.percentLeft}</label>
                                </div>
                                <div>
                                    <label>{item.scoreRight}</label>
                                    <label>{item.percentRight}</label>
                                </div>
                            </div>
                        </Col>
                </Container>
            
            </Slide>
          ))}
        </Slider>
        <div className='sliderButtons'>
            <ButtonBack className="btnLeft"><FiChevronLeft size="1.5em"  /></ButtonBack>
            <ButtonNext className="btnRight"><FiChevronRight size="1.5em"  /></ButtonNext>
        </div>
      </CarouselProvider>
    )
  }
//   })
  
export default Terminal