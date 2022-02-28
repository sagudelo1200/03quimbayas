import React from 'react'

// reactstrap components
import { Container } from 'reactstrap'

// core components

function Header({ unidad, nIntegrantes }) {
  let filterColor, name, type
  let pageHeader = React.createRef()

  switch (unidad) {
    case 'familia':
      name = 'Familia Mohwa'
      type = 'Unidad de cachorros'
      filterColor = 'blue'
      break
    case 'manada':
      name = 'Manada Seoonee'
      type = 'Unidad de Manada'
      filterColor = 'yellow'
      break
    case 'tropa':
      name = 'Tropa Arawak'
      type = 'Unidad de Tropa Scout'
      filterColor = 'green'
      break
    case 'sociedad':
      name = 'Sociedad Sion'
      type = 'Unidad de Pioneros'
      filterColor = 'dark-blue'
      break
    case 'clan':
      name = 'Clan Taironas'
      type = 'Unidad de Clan de Rovers'
      filterColor = 'red'
      break
    case 'jefatura':
      name = 'Unidad Katios'
      type = 'Jefatura de Grupo'
      filterColor = 'dark-blue'
      break
    case 'consejo':
      name = 'Consejo de Padres'
      type = 'Consejo de Grupo'
      filterColor = 'dark-blue'
      break
    default:
      filterColor = 'green'
      break
  }

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)'
      }
      window.addEventListener('scroll', updateScroll)
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll)
      }
    }
  })
  return (
    <>
      <div
        className='page-header clear-filter page-header-small'
        filter-color={filterColor}
      >
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              'url(' + require(`assets/img/${unidad}.jpg`).default + ')',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className='photo-container'>
            <img alt='...' src={require(`assets/img/logos/${unidad}_oficial.jpg`).default}></img>
          </div>
          <h3 className='title'>{name}</h3>
          <p className='category'>{type}</p>
          <div className='content'>
            <div className='social-description'>
              {nIntegrantes === true ? (
                /* loading spinner */
                <i className="fa-solid fa-spinner fa-spin fa-3x pb-1"></i>
              ) : (
                <h2>{nIntegrantes}</h2>
              )}
              <p>Integrantes</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Header
