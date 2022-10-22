import { useState } from 'react'
import Widget from './widget.js'
import SpecificSport from './specific-sport.js'
import VirtualSport from './virtual-sport.js'
import Terminal from './terminal.js'
import Tournaments from './tournaments.js'
import BetSlip from './bet-slip.js'
import UserInterface, { Pane, PaneRow, Sidebar, VerticalNavbar } from './user-interface.js'
import {  BiLeftArrow } from 'react-icons/bi'
import styles from '../styles/components/interface.module.sass'

//import styles from '../styles/components/interface.module.sass'


export default function Interface(props) {
  const [displayValue, setdisplayValue] = useState(false);
  const hideNavBar = () => {
    setdisplayValue(!displayValue)
    console.log("hidden navbar ",displayValue)
  }
  const visible = {
    left : '0'
  }
  const hidden= {
    left: '-405px'
  }
  let page = props.page
    return (
      <> 
        <UserInterface layout={page}>
          <aside className={styles.side} style={displayValue ? visible : hidden}>
              <div className='navBarHandler' onClick={hideNavBar}>
                <div>
                  <BiLeftArrow />
                </div>
              </div>
            <VerticalNavbar />
              {/* <PaneRow>
                <span className="close-menu">close</span>
                <Widget type="menu" title="dir_nav_" icon="triangles">
                  <Directory widgets={page} />
                </Widget>
              </PaneRow>
              <PaneRow name="small">
                <Widget type="audio" title="freq_v_" icon="triangles">
                  <Visualizer />
                </Widget>
              </PaneRow>
              <PaneRow name="fill">
                <Widget type="report" title="num_" icon="triangles">
                  <Report />
                </Widget>
              </PaneRow>
              <PaneRow>
                <Widget type="social" title="social_" icon="triangles">
                  <Social />
                </Widget>
              </PaneRow> */}
            </aside>

          <div className='sectionRight'>
            <Pane>
              <PaneRow name="primary">
                <Widget type="terminal" title="terminal_" icon="globe">
                  <Terminal page={page} />
                </Widget>
              </PaneRow>

              <PaneRow name="primary">
                <Widget type="tournaments" title="tournaments" icon="globe">
                  <Tournaments page={page} />
                </Widget>
              </PaneRow>

              <PaneRow name="primary">
                <Widget type="sport" title="football" icon="globe">
                  <SpecificSport page={page} />
                </Widget>
              </PaneRow>

              <PaneRow name="primary">
                <Widget type="sport" title="virtual sport" icon="globe">
                  <VirtualSport page={page} />
                </Widget>
              </PaneRow>

              <div style={{padding:'20px'}}></div>

              {/* <PaneRow name="secondary">
                <Widget type="terminal" title="discord?_" icon="arc">
                  <i>connect to discord API<br/>BSaaz73pJD</i>
                </Widget>
                <Widget type="files" title="dir_" icon="arc">
                  <Files />
                </Widget>
              </PaneRow> */}
            </Pane>

            <Sidebar>
              <div className="mb-aside">
                <PaneRow>
                  {/* <span className="close-menu">close</span> */}
                  {/* <Widget type="menu" title="dir_nav_" icon="triangles">
                    <Directory widgets={page} />
                  </Widget> */}
                  <Widget type="sport" title="virtual sport" icon="globe">
                    <BetSlip page={page} />
                  </Widget>
                </PaneRow>
              </div>
              {/* <PaneRow name="small">
                <Widget type="audio" title="freq_v_" icon="triangles">
                  <Visualizer />
                </Widget>
              </PaneRow>
              <PaneRow name="fill">
                <Widget type="report" title="num_" icon="triangles">
                  <Report />
                </Widget>
              </PaneRow>
              <PaneRow>
                <Widget type="social" title="social_" icon="triangles">
                  <Social />
                </Widget>
              </PaneRow> */}
            </Sidebar>
          </div>
          
        </UserInterface>
      </>
    )

}