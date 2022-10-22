import React, {useEffect, useState} from 'react';
import Router from 'next/router'

import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'
import styles from '../styles/components/virtual.module.sass'

// import styles from './widget.module.sass'

export default function VirtualSport(props) {
    const data = [
        {
          icon: <IoTennisball className='tennisIcon customSvgSlider' />,
          img : <IoTennisball className="iconSmall customSvgSlider" />,
          style: {
                borderColor:'red',

            }
        },
        {
            icon: <IoTennisball className='tennisIcon customSvgSlider' />,
          img : <IoTennisball className="iconSmall customSvgSlider" />,
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
      <> 
          <div id="terminal-container" className="random sliderMain sportSection">
            <div id="terminal">
                <div className={styles.header}>
                        <h2>Virtual Sport</h2>
                        <p>Permanent live, fast pacing matches, Immediate settlement</p>
                </div>

                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className={styles.bgCustom}>
                            <IoTennisball />
                            <h2>eBasketBall</h2>
                            <p>Live 9</p>
                        </div>
                        <div className={styles.bgCustom}>
                            <IoTennisball />
                            <h2>eBasketBall</h2>
                            <p>Live 9</p>
                            
                        </div>
                        <div className={styles.bgCustom}>
                            <IoTennisball />
                            <h2>eBasketBall</h2>
                            <p>Live 9</p>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </>
    )
}