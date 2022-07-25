import {
  Container,
  NavbarBrand,
  UncontrolledTooltip,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useAuth } from 'contexts/authContext'

import LoginModal from 'components/Modals/LoginModal'


const Navcontainer = ({ collapseOpen, setCollapseOpen, brandColor = 'text-success' }) => {
  const pathName = window.location.pathname.replace('/', '')
  const { isAuthenticated, logout, currentUser } = useAuth()
  return (
    <Container>
      <div className='navbar-translate'>
        <NavbarBrand to='/' tag={Link} id='navbar-brand' className={brandColor}>
          <img alt='...' className='rounded-circle mr-1' src={require('assets/img/logo.png').default} width={40} />
          Grupo Scout 03 Quimbayas
        </NavbarBrand>
        <UncontrolledTooltip target='navbar-brand'>
          Hacia la cima del éxito!
        </UncontrolledTooltip>
        <button
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(!collapseOpen)
          }}
          aria-expanded={collapseOpen}
          className='navbar-toggler'
        >
          <span className='navbar-toggler-bar top-bar'></span>
          <span className='navbar-toggler-bar middle-bar'></span>
          <span className='navbar-toggler-bar bottom-bar'></span>
        </button>
      </div>
      <Collapse isOpen={collapseOpen} navbar>
        <Nav className='d-flex align-items-center ml-auto' id='ceva' navbar>
          <UncontrolledDropdown
            active={
              pathName === 'familia' ||
              pathName === 'manada' ||
              pathName === 'tropa' ||
              pathName === 'sociedad' ||
              pathName === 'clan' ||
              pathName === 'jefatura' ||
              pathName === 'consejo'
            }
            nav
          >
            <DropdownToggle
              caret
              color='default'
              data-toggle='dropdown'
              href='#03Quimbayas'
              id='navbarDropdownMenuLink1'
              nav
              onClick={(e) => e.preventDefault()}
            >
              <i className='fas fa-users mr-1'></i>
              <p>Unidades</p>
            </DropdownToggle>
            <DropdownMenu aria-labelledby='navbarDropdownMenuLink1' right>
              <DropdownItem active={pathName === 'familia' ? true : false} to='/familia' tag={Link}>
                Familia Mohwa
              </DropdownItem>
              <DropdownItem active={pathName === 'manada' ? true : false} to='/manada' tag={Link}>
                Manada Seoonee
              </DropdownItem>
              <DropdownItem active={pathName === 'tropa' ? true : false} to='/tropa' tag={Link}>
                Tropa Arawak
              </DropdownItem>
              <DropdownItem active={pathName === 'sociedad' ? true : false} to='/sociedad' tag={Link}>
                Sociedad Sion
              </DropdownItem>
              <DropdownItem active={pathName === 'clan' ? true : false} to='/clan' tag={Link}>
                Clan Taironas
              </DropdownItem>
              <DropdownItem active={pathName === 'jefatura' ? true : false} to='/jefatura' tag={Link}>
                Jefatura Katios
              </DropdownItem>
              <DropdownItem active={pathName === 'consejo' ? true : false} to='/consejo' tag={Link}>
                Consejo de Padres
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className={pathName === 'grupo' ? 'active' : ''}>
            <NavLink to='/grupo' tag={Link}>
              <i className='fas fa-user-tag mr-1'></i>
              Grupo
            </NavLink>
          </NavItem>
          {!isAuthenticated() && (
            <NavItem className={pathName === 'ingresar' ? 'd-none' : ''}>
              <LoginModal />
            </NavItem>
          )}
          {isAuthenticated() && (
            <UncontrolledDropdown
              active={pathName === 'perfil' ? true : false}
              nav
            >
              <DropdownToggle
                caret
                color='default'
                data-toggle='dropdown'
                href='/perfil'
                id='navbarDropdownMenuLink2'
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className='fas fa-user mr-1'></i>
                <p>{currentUser.displayName}</p>
              </DropdownToggle>
              <DropdownMenu aria-labelledby='navbarDropdownMenuLink2' right>
                <DropdownItem active={pathName === 'perfil' ? true : false} to='/perfil' tag={Link}>
                  <i className='fas fa-cog mr-1'></i>
                  Configuración
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logout}>
                  <i className='fas fa-sign-out-alt mr-1'></i>
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          )}
          <NavItem>
            <img alt='Excelencia CSA' id='logoexcelenciacsa' className='rounded-circle mb-1' src={require('assets/img/logos/excelenciacsa.png').default} width={50} />
            <UncontrolledTooltip target='logoexcelenciacsa'>
              Grupo Excelencia CSA
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <img alt='CSA' id='logocsa' className='mb-1' src={require('assets/img/logos/csa.png').default} height={50} />
            <UncontrolledTooltip target='logocsa'>
              Corporación Scout de Antioquia
            </UncontrolledTooltip>
          </NavItem>
          <NavItem>
            <img alt='OMMS' id='logoscoutsmundial' className='rounded-circle mb-1' src={require('assets/img/logos/scout.png').default} width={50} />
            <UncontrolledTooltip target='logoscoutsmundial'>
              ASC y Organización Mundial del Movimiento Scout
            </UncontrolledTooltip>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  )
}


export default Navcontainer
