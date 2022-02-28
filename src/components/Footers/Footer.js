import React from 'react'

// reactstrap components
import {
  Container, UncontrolledTooltip
} from 'reactstrap'

const Footer = () => {
  return (
    <footer className="footer footer-white footer-big">
      <Container>
        <div className="copyright text-center">
          <span id='copyright' className='text-dark'>
            Copyright © {new Date().getFullYear()} Hecho con <i className='fas fa-heart text-danger' /> por <a href="/" target="_blank">Santiago Agudelo</a>
          </span>
          <UncontrolledTooltip target="copyright">
            Todos los derechos reservados
          </UncontrolledTooltip>
        </div>
      </Container>
    </footer>
  )
}


export default Footer
