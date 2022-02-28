import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap'

// core components

function DestacadosBanner() {

  return (
		<section>
			<Container>
				<div id='images' className='text-center'>
					<h2 className='title'>Los más destacados de nuestro grupo Scout.</h2>
					<Row>
						<Col xs='6' sm='4' md='2' className='py-2'>
						<Link to={{
								pathname: '/destacados',
								pill: 'familia',
							}}>
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
							</Link>
						</Col>
						<Col xs='6' sm='4' md='2' className='py-2'>
						<Link to={{
								pathname: '/destacados',
								pill: 'manada',
							}}>
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
							</Link>
						</Col>
						<Col xs='6' sm='4' md='2' className='py-2'>
						<Link to={{
								pathname: '/destacados',
								pill: 'tropa',
							}}>
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
							</Link>
						</Col>
						<Col xs='6' sm='4' md='2' className='py-2'>
						<Link to={{
								pathname: '/destacados',
								pill: 'sociedad',
							}}>
								<img
									alt='destacados  sociedad'
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
							</Link>
						</Col>
						<Col xs='6' sm='4' md='2' className='py-2'>
						<Link to={{
								pathname: '/destacados',
								pill: 'clan',
							}}>
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
							</Link>
						</Col>
						<Col xs='6' sm='4' md='2' className='py-2'>
							<Link to={{
								pathname: '/destacados',
								pill: 'grupo',
							}}>
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
							</Link>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	)
}

export default DestacadosBanner
