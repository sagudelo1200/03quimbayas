import React, { useState } from 'react'

import Subpage from 'layouts/Subpage'
import TabPaneComponent from './components/TabPaneComponent'

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  UncontrolledTooltip,
} from 'reactstrap'

const Destacados = ({ location }) => {
  const pill = location.pill ?? 'grupo'
  const [active, setActive] = useState(pill)
  return (
    <Subpage title='Destacados'>
       <Container>
          <div className='nav-align-center'>
            <h1 className='title'>Destacados 03 Quimbayas</h1>
            <Nav
              className='nav-pills-info nav-pills-just-icons d-flex justify-content-around'
              pills
              role='tablist'
            >
              <NavItem>
                <NavLink
                  className={active === 'familia' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('familia');
                  }}
                >
                  <img
                    alt='destacados familia'
                    className='rounded-circle'
                    src={require('assets/img/logos/familia.png').default}
                    id='tooltipfamilia'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltipfamilia'
                  >
                    Destacados Familia Mohwa
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={active === 'manada' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('manada');
                  }}
                >
                  <img
                    alt='destacados manada'
                    className='rounded-circle'
                    src={require('assets/img/logos/manada.png').default}
                    id='tooltipmanada'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltipmanada'
                  >
                    Destacados Manada Seoonee
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={active === 'tropa' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('tropa');
                  }}
                >
                  <img
                    alt='destacados tropa'
                    className='rounded-circle'
                    src={require('assets/img/logos/tropa.png').default}
                    id='tooltiptropa'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltiptropa'
                  >
                    Destacados Tropa Arawak
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={active === 'sociedad' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('sociedad');
                  }}
                >
                  <img
                    alt='destacados sociedad'
                    className='rounded-circle'
                    src={require('assets/img/logos/sociedad.png').default}
                    id='tooltipsociedad'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltipsociedad'
                  >
                    Destacados Sociedad Sion
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={active === 'clan' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('clan');
                  }}
                >
                  <img
                    alt='destacados clan'
                    className='rounded-circle'
                    src={require('assets/img/logos/clan.png').default}
                    id='tooltipclan'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltipclan'
                  >
                    Destacados Clan Taironas
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
              <NavItem style={{width: '99px'}}>
                <NavLink
                  className={active === 'grupo' ? 'active' : ''}
                  href='#03Quimbayas'
                  onClick={(e) => {
                    e.preventDefault();
                    setActive('grupo');
                  }}
                >
                  <img
                    alt='destacados 03'
                    className='rounded-circle'
                    src={require('assets/img/logos/excelenciagrupo.png').default}
                    id='tooltipgrupo'
                  />
                  <UncontrolledTooltip
                    delay={0}
                    placement='bottom'
                    target='tooltipgrupo'
                  >
                    Destacados 03 Quimbayas
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={'pills' + active}>
            <TabPaneComponent unidad='familia' />
            <TabPaneComponent unidad='manada' />
            <TabPaneComponent unidad='tropa' />
            <TabPaneComponent unidad='sociedad' />
            <TabPaneComponent unidad='clan' />
            <TabPaneComponent unidad='grupo' />
          </TabContent>
        </Container>
    </Subpage>
  )
}


export default Destacados
