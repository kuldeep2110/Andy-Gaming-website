import React, {useEffect, useState} from 'react';
import Router from 'next/router'

import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'
import styles from '../../styles/components/sport.module.sass'

// import styles from './widget.module.sass'

export default function SportsTable(props) {
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
                        <table className={styles.table}>
                                        <tr>
                                            <th>
                                                <div className={styles.title}>
                                                    <IoFootball className={[styles.football]} />Japenese League Cup
                                                </div>
                                            </th>
                                            <th>Half 1</th>
                                            <th>Match Winner</th>
                                        </tr>
                                    {/* {data.map((item, index) => ( */}
                                        {/* <tr key={index} index={index}> */}
                                        <tr>
                                            <td>
                                                {/* {item.icon} */}
                                                <div className={styles.title}><IoFootball className={[styles.football]} /> test</div>
                                                <span></span>
                                                <div className={styles.title}><IoFootball className={[styles.football]} /> test</div>
                                            </td>
                                            <td>
                                                <div className={styles.dFlex}>
                                                    <div>
                                                        <div>1</div>
                                                        <span></span>
                                                        <div>2</div>
                                                    </div>
                                                    <div className={styles.spanText}>
                                                        <div>H1</div>
                                                        <span>H</span>
                                                        <div>2</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={styles.lastSection}>
                                                    <div className={styles.bgDark}>
                                                        <label>1</label>
                                                        <label htmlFor="">120</label>
                                                    </div>
                                                    <div className={styles.bgDark}>
                                                        <label>X</label>
                                                        <label htmlFor="">900</label>
                                                    </div>
                                                    <div>
                                                        +320
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    {/* ))} */}
                                </table>
      </>
    )
}