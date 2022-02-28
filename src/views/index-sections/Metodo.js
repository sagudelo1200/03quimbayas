import { Container, Row, Col } from 'reactstrap'


const Metodo = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md='7' className='mx-auto text-center mt-0'>
            <h2 className='title'>El método Scout</h2>
            <p>
              El&nbsp;
              <a href='https://es.wikipedia.org/wiki/Escultismo' target='_blank' rel='noreferrer'>Movimiento Scout</a>&nbsp;
              tiene como misión contribuir, a través de un sistema de valores basados en la&nbsp;<a href='https://es.wikipedia.org/wiki/Promesa_scout' target='_blank' rel='noreferrer'>Promesa</a> y la <a href='https://es.wikipedia.org/wiki/Ley_scout' target='_blank' rel='noreferrer'>Ley Scout</a>, a la educación&nbsp;de los jóvenes para que participen en la construcción de un mundo mejor, donde las personas se
              desarrollen plenamente y jueguen un papel constructivo en la sociedad.
            </p>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-circle'>
                <i className='fas fa-signature' />
              </div>
              <h4 className='info-title'>Adhesión voluntaria</h4>
              <p className='description'>
                La Promesa Scout es una fórmula de adhesión personal, libre y voluntaria, al estilo de vida que propone la Ley.
                Es un compromiso personal ante una comunidad que también se compromete a apoyar y a exigir.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-primary icon-circle'>
                <i className='fas fa-fist-raised' />
              </div>
              <h4 className='info-title'>Educación a través de la acción</h4>
              <p className='description'>
                El Escultismo propone un método de educación activa que parte desde los dinamismos naturales de los niños y jóvenes: de sus intereses, de sus deseos y sus sueños; para convertirlos en aventuras entusiasmantes.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-info icon-circle'>
                <i className='fas fa-users' />
              </div>
              <h4 className='info-title'>Pertenencia a pequeños grupos</h4>
              <p className='description'>
                Cada uno necesita de los demás para realizarse como persona.
                El Escultismo desarrolla este dinamismo social a través la pertenencia a pequeños grupos donde cada integrante se hace responsable de una tarea frente a sus compañeros.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-warning icon-circle'>
                <i className='fas fa-sort-amount-up' />
              </div>
              <h4 className='info-title'>Programas progresivos</h4>
              <p className='description'>
                Toda persona está llamada a ser libre, a desarrollarse plenamente y a ser responsable de su desarrollo.
                Cada actividad es un llamado a crecer porque propone un desafío e invita a plantearse metas y compromisos, según la edad, con el fin de desarrollar la vocación personal.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-danger icon-circle'>
                <i className='fas fa-people-carry' />
              </div>
              <h4 className='info-title'>Orientación y acompañamiento</h4>
              <p className='description'>
                El proceso educativo que propone el Escultismo sólo es posible en la medida en que existan adultos responsables de su puesta en práctica.
                El voluntario adulto participa activamente de ese proceso compartiendo las actividades con los jóvenes y generando espacios que permitan vivenciar los valores que propone el movimiento.
              </p>
            </div>
          </Col>
          <Col sm='6' md='4'>
            <div className='info info-hover'>
              <div className='icon icon-success icon-circle'>
                <i className='fas fa-tree' />
              </div>
              <h4 className='info-title'>El contacto con la naturaleza</h4>
              <p className='description'>
                La naturaleza es el espacio privilegiado de las actividades del Movimiento Scout.
                Su objetivo es integrar al joven como sujeto activo y respetuoso del medio natural.
                El conocimiento y aceptación de otros seres vivos es fundamento para el respeto, la tolerancia y la convivencia solidaria en la sociedad humana.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Metodo
