import Subpage from 'layouts/Subpage'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'

const Grupo = () => {
  return (
    <Subpage>
      <h1 className='text-center title title'>Grupo Scout 03 Quimbayas</h1>
      <h4 className='text-center'>Hacia la cima del éxito!</h4>
      <Container className='text-center'>
        <h2 className='title'>¿Quiénes somos?</h2>
        <Row className='justify-content-center align-items-center'>
          <Col md='6'>
            <p>
              El Grupo Scout 03 Quimbayas, tiene su sede en el parque de San Pio X en el municipio
              de Itagüí, departamento de Antioquia, y se encuentra adscrito a la Organizacion Mundial del
              Movimiento Scout <b>OMMS</b>, la Asociación Scouts de Colombia <b>ASC</b> y la Corporacion Scouts de Antioquia <b>CSA</b>.
            </p>
          </Col>
          <Col md='6'>
            <p>
              Su objetivo es ofrecer los medios y actividades necesarias con la finalidad de contribuir
              al desarrollo integral de los niños, jóvenes y adultos  de la parte sur del Valle de Aburrá,
              potenciando sus mejores sentimientos según el método iniciado por Lord Baden-Powell.
            </p>
          </Col>
          <Col md='6'>
            <Card className='text-center'>
              <CardBody>
                <h3 className='title'>Misión</h3>
                <CardText>
                  Aportar en la formación de ciudadanos responsables, que participen en la construcción de un mundo mejor, a través de un proceso educativo no formal, utilizando un método específico que convierte cada scout en el principal agente de su propio desarrollo, mediante un sistema de valores basado en la ley y la promesa scout.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='6'>
            <Card className='text-center'>
              <CardBody>
                <h3 className='title'>Visión</h3>
                <CardText>
                  Para el 2020 el grupo Scout 03 Quimbayas sera un grupo de referencia en Antioquia caracterizado por generar un cambio positivo en las comunidades que impacta.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='6' lg='4'>
            <Card>
              <CardBody>
                <img src={require('assets/img/membrete_grupo.png').default} alt='Tartán' className='card-img-top' />
                <h4 className='card-title title'>Tartán</h4>
                <CardText>
                  Nuestra insignia contiene en un triángulo nuestro nombre y número, el poporo quimbayas y la flor de lis.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='6' lg='4'>
            <Card>
              <CardBody>
                <img src={require('assets/img/bandera_grupo.jpg').default} alt='Bandera' className='card-img-top' />
                <h4 className='card-title title'>Bandera</h4>
                <CardText>
                  Nuestra bandera reúne los colores de la pañoleta, la Flor de Lis y el poporo Quimbayas.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='6' lg='4'>
            <Card>
              <CardBody>
                <img src={require('assets/img/pañoleta.jpg').default} alt='Pañoleta' className='card-img-top' />
                <h4 className='card-title title'>Pañoleta</h4>
                <CardText>
                  Sus colores significan<br />
                  Amarillo: Riqueza<br />
                  Verde: Esperanza
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md='6' lg='4'>
            <Card>
              <CardBody>
                <img src={require('assets/img/poporo.jpg').default} alt='Poporo Quimbayas' className='card-img-top' />
                <h4 className='card-title title'>Poporo Quimbayas</h4>
                <CardText>
                  El poporo quimbaya, que nos representa es una pieza de arte precolombino del periodo quimbaya clásico.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <h2 className='title'>Escúchanos</h2>
        <Row className='justify-content-center align-items-center'>
          <Col md='6'>
            <h4 className='text-center'>
              Grito de grupo
            </h4>
            <audio controls>
              <source src={require('assets/audio/grito_del_grupo.m4a').default} type='audio/mpeg' />
              Tu navegador no soporta este elemento
            </audio>
          </Col>
          <Col md='6'>
            <h4 className='text-center'>
              Historia del grupo
            </h4>
            <audio controls>
              <source src={require('assets/audio/historia_del_grupo.m4a').default} type='audio/mpeg' />
              Tu navegador no soporta este elemento
            </audio>
          </Col>
        </Row>
      </Container>
    </Subpage>
  )
}


export default Grupo
