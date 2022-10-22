import { useState, useEffect } from 'react'
import Container from './container.js'
import {MdOutlineInsertChartOutlined, MdSearch} from 'react-icons/md'
import {AiFillHome} from 'react-icons/ai'
import { IoMdFootball } from 'react-icons/io'
import { BiTennisBall } from 'react-icons/bi'
import styles from '../styles/components/interface.module.sass'
import { Sidenav, Nav, Toggle } from 'rsuite';
import test from '../public/assets/img/341.png'
import Image from 'next/image.js'
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from './header.js'
import Balance from './balance.js'

export default function UserInterface(props) {
  return (
    <> 
      {/* <Container> */}
        <div id="ui" data-layout={props.layout} className={styles.ui}>
          {props.children}
        </div>
      {/* </Container> */}
    </>
  )
}

export function Pane(props) {
  return (
    <> 
      <section className={styles.pane}>
        {props.children}
      </section>
    </>
  )
}

export function PaneRow(props) {
  return (
    <> 
      <div data-row={props.name} className={styles.row}>
        {props.children}
      </div>
    </>
  )
}

export function Sidebar(props) {
  // const [expanded, setExpanded] = useState(true);
  // const [activeKey, setActiveKey] = useState('1');

  return (
    <> 
      <aside className={styles.side}>
        {props.children}
        
      </aside>
    </>
  )
}

export function VerticalNavbar(){
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  useEffect(() => {
    console.log("expanded value",expanded)
  }, [expanded]);
  return(
    <div className={styles.navContainer} >
            <Sidenav expanded={expanded} defaultOpenKeys={['5']}>
              <Sidenav.Body>
                <Nav activeKey={activeKey} onSelect={setActiveKey} className={styles.navUl}>
                  <div className={styles.hideBtnLarge}>
                    <Web3ReactProvider getLibrary={getLibrary}>
                      <Balance />
                    </Web3ReactProvider>
                  </div>
                  <Nav.Item eventKey="0" icon={<MdSearch />} className={[styles.search, styles.navSection, styles.customSvg]}>
                    <input type="search" />
                  </Nav.Item>

                  <div className={styles.navSection}>
                    <div className={styles.item}>
                      <Nav.Item eventKey="1" icon={<AiFillHome />} className={[styles.customSvg, styles.home]}>
                        Home
                      </Nav.Item>
                      <Nav.Item eventKey="2" icon={<MdOutlineInsertChartOutlined />} className={[styles.customSvg, styles.live]}>
                        Live
                      </Nav.Item>
                    </div>
                  </div>

                  <br />
                  <label >Games</label>
                  <div className={[styles.navOverflow]}>
                    <div className={[styles.navSection]}>
                      <div className={styles.item}>
                          <Nav.Menu placement="rightStart" 
                            eventKey="3" 
                            title="Football" 
                            icon={<IoMdFootball />} 
                            className={[styles.customSvg, styles.football]}
                            onToggle={eventKey => setActiveKey(eventKey)}
                          >
                            <Nav.Item eventKey="3-1">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="3-2">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="3-3">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="3-4">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                          </Nav.Menu>

                        <hr />
                        
                        
                        <Nav.Menu
                          placement="rightStart"
                          eventKey="4"
                          title="Tennis"
                          icon={<BiTennisBall />} 
                          className={[styles.customSvg, styles.tennis]}
                        >
                            <Nav.Item eventKey="4-1">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="4-2">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="4-3">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="4-4">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                          {/* <Nav.Menu eventKey="4-5" title="Custom Action">
                            <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                            <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                          </Nav.Menu> */}
                        </Nav.Menu>

                        <hr />

                        <Nav.Menu 
                          placement="rightStart" 
                          eventKey="5" title="Football" 
                          icon={<IoMdFootball />} 
                          className={[styles.customSvg, styles.football]}
                        >
                            <Nav.Item eventKey="5-1">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="5-2">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="5-3">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                            <Nav.Item eventKey="5-4">< Image src={test} alt="football-1"/> Football Sub Menu</Nav.Item>
                          </Nav.Menu>

                        <hr />

                        <Nav.Menu
                          placement="rightStart"
                          eventKey="6"
                          title="Tennis"
                          icon={<BiTennisBall />} 
                          className={[styles.customSvg, styles.tennis]}
                          expanded
                        >
                            <Nav.Item eventKey="6-1">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="6-2">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="6-3">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                            <Nav.Item eventKey="6-4">< Image src={test} alt="Tennis-1"/> Tennis Sub Menu</Nav.Item>
                          {/* <Nav.Menu eventKey="4-5" title="Custom Action">
                            <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                            <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                          </Nav.Menu> */}
                        </Nav.Menu>

                      </div>
                    </div>
                  </div>

                </Nav>
              </Sidenav.Body>
              {/* <Sidenav.Toggle expanded={expanded} onToggle={expanded => setExpanded(expanded)} /> */}
            </Sidenav>
        </div>
  )
}