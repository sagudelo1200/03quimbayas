import React from 'react'

// reactstrap components
import {
  Container,
  Row,
  Col,
} from 'reactstrap'


function IndexHeader() {
  // navbar collapses states and functions
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      {navbarOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setNavbarOpen(false)
          }}
        />
      ) : null}
        <div className='header'>
          <div className='page-header clear-filter' filter-color='green'>
            <div
              className='page-header-image'
              style={{
                backgroundImage:
                  'url(' + require('assets/img/header.jpg').default + ')',
              }}
            />
            <Container>
              <Row>
                <Col className='ml-auto mr-auto text-center' md='8'>
                  <h1 className='title'>Grupo Scout 03 Quimbayas</h1>
                  <img alt='...' className='header-logo' src={require('assets/img/logo.png').default}></img>
                  <h5 className='description text-white h2'>
                    Hacia la cima del éxito!
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    </>
  )
}

export default IndexHeader
