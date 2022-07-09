import React from 'react'

// reactstrap components
import {
  Container, UncontrolledTooltip
} from 'reactstrap'

const Footer = () => {
  return (
    <footer className="footer footer-white footer-big">
      <Container>
        <hr />
        <div className="location">
          <p className='mb-0'>
            Antioquia - Colombia
          </p>
          <p className='mb-0'>
            San Pio X - Itagüi
          </p>
          <p className='mb-0'>
            Diagonal 47 N° 33-03
          </p>
        </div>
        <div className="socialmedia text-center">
          <a
            href="https://wa.me/573188218186"
            target="_blank"
            rel="noopener noreferrer"
            id='tooltip838269962'
            className='mx-3'
          >
            <img
              src={require('../../assets/img/whatsapp-logo.png').default}
              alt="whatsapp logo"
              width={32}
            />
          </a>
          <UncontrolledTooltip target="tooltip838269962">
            Enviar whatsapp #1
          </UncontrolledTooltip>
          <a href="https://www.instagram.com/03decorazon/" id="tooltip11233535" target="_blank" rel='noopener noreferrer' title="Siguenos en Instagram" className='mx-3'>
            <img width={32} alt="instagram logo" src={require('assets/img/instagram-logo.png').default} />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip11233535">
            Siguenos en Instagram
          </UncontrolledTooltip>
          <a
            href="mailto:gruposcout03quimbayas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id='tooltip532111601'
            className='mx-3'
          >
            <img
              src={require('../../assets/img/gmail-logo.png').default}
              alt="gmail logo"
              width={32}
            />
          </a>
          <UncontrolledTooltip target="tooltip532111601">
            Enviar correo electronico
          </UncontrolledTooltip>
          <a href="https://www.facebook.com/03decorazon/" id="tooltip234586" target="_blank" rel='noreferrer' title="Visitanos en Facebook" className='mx-3'>
            <img width={32} alt="facebook logo" src={require('assets/img/facebook-logo.png').default} />
          </a>
          <UncontrolledTooltip delay={0} target="tooltip234586">
            Visitanos en Facebook
          </UncontrolledTooltip>
          <a
            href="https://wa.me/573113578047"
            target="_blank"
            rel="noopener noreferrer"
            id='tooltip4459876456'
            className='mx-3'
          >
            <img
              src={require('../../assets/img/whatsapp-logo.png').default}
              alt="whatsapp logo"
              width={32}
            />
          </a>
          <UncontrolledTooltip target="tooltip4459876456">
            Enviar whatsapp #2
          </UncontrolledTooltip>
        </div>
        <div className="map mt-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.9215277354163!2d-75.61978792107749!3d6.164968695157984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d573855229%3A0xdab9cd6b17bdc8d4!2sDg.%2047%20%2333-3%2C%20Itag%C3%BCi%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1646541297257!5m2!1ses!2sco" width="90%" height="200px" frameBorder="0" style={{ border: 10 }} allowFullScreen></iframe>
        </div>
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
