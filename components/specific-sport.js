import React, {useEffect, useState} from 'react';
import Router from 'next/router'

import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'
import styles from '../styles/components/sport.module.sass'
import SportsTable from './sportsTable/table'

// import styles from './widget.module.sass'

export default function SpecificSport(props) {
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
                    <div className={[ styles.title ]}>
                        <IoFootball className={[styles.football]} />Football
                    </div>
                    <div>
                        {/* <button>More</button> */}
                    </div>
                </div>

                <div className={styles.container}>
                    <div className="row clearfix">
                        <div className="col-sm-12">
                        <SportsTable />
                        <br />
                        <SportsTable />
                        <br />
                        <SportsTable />
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </>
    )
}