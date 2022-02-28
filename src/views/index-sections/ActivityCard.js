import {
  Card,
  UncontrolledTooltip,
} from 'reactstrap'

const ActivityCard = ({ actividad }) => {
  return (
    <Card className='card-blog'>
      <div className='card-image'>
        <img alt='...' src={actividad.imagen} />
      </div>
      <div className='card-body'>
        <h6>
          <span className='badge badge-primary mr-1'>
            <i className='fas fa-calendar-alt m-1' />
            {actividad.fecha}
          </span>
          <span className='badge badge-default'>
            <i className='fas fa-clock m-1' />
            {actividad.hora}
          </span>
        </h6>
        <h5 className='card-title title pt-0'>
          {actividad.nombre}
        </h5>
        <p className='card-description'>
          {actividad.descripcion}
        </p>
        <div className='card-footer'>
          <div className='badges'>
            {actividad.precio && (
              <span className='text-white badge badge-pill badge-success mr-1'>
                <i className='fas fa-dollar-sign mr-1' />
                {actividad.precio}
              </span>
            )}
            <span className='text-white badge badge-pill badge-info'>
              <i className='fas fa-map-marker-alt mr-1' />
              {actividad.lugar || 'Por definir'}
            </span>
          </div>
          <div className='stats stats-right'>
            <i id='confirm' className='text-dark fas fa-check-double d-none' />
            <UncontrolledTooltip placement='bottom' target='confirm'>
              Confirmar asistencia
            </UncontrolledTooltip>
          </div>
        </div>
      </div>
    </Card>
  )
}


export default ActivityCard
