import React, {useEffect, useState} from 'react';
import Router from 'next/router'
import { IoTennisball, IoFootball } from 'react-icons/io5'
import { MdSportsCricket } from 'react-icons/md'
import styles from '../styles/components/betSlip.module.sass'

// import styles from './widget.module.sass'

export default function BetSlip(props) {
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
      const [key, setKey] = useState('home');

    return (
      <> 
          <div id="terminal-container" className="random sliderMain sportSection">
            <div id="terminal">
                <div style={{display:'flex',marginTop:'10px'}}>
                    <div className={styles.bgLight}>Bet Slip</div>
                    <div className={styles.bgLight}>Bet Slip</div>
                </div>
                <div>
                    <div className={styles.body}>
                        <p>BET SLIP CONTENT</p>
                    </div>
                </div>
            </div>
          </div>
      </>
    )
}

// export function BetSlipContent () {
//     return(
//         <>
            
//         </>
//     )
// }