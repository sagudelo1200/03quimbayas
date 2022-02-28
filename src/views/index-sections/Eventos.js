import { useEffect, useState } from 'react'
import { db } from 'firebaseApp'
import {
  query,
  collection,
  where,
  getDocs,

} from 'firebase/firestore'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

import ActivityCard from './ActivityCard'

const Eventos = () => {
  const [actividades, setActividades] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    let newList = []
    const q = query(collection(db, 'actividades'), where('estado', '==', 'publicado'))

    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      newList = [...newList, { ...doc.data(), id: doc.id }]
    })
    setActividades(newList)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section data-background-color="black">
      <Container>
        <Row className='justify-content-center text-center'>
          <Col sm='6'>
            <h2 className='title text-center'>Prepárate para lo que viene</h2>
            <p>
              La aventura continúa, sigue de cerca nuestras próximas actividades y confirma tu asistencia!
            </p>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          {loading === true ? (
            <Col className='text-center mb-3'>
              <i className='fas fa-circle-notch fa-spin fa-3x' />
            </Col>
          ) : actividades.length === 0 ? (
            <Col className='text-center text-'>
              <i>No hay actividades disponibles</i>
            </Col>
          ) : (
            actividades.map((actividad) => (
              <Col key={actividad.id} xs='12' sm='10' md='6' lg='4'>
                <ActivityCard actividad={actividad} />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </section>
  )
}


export default Eventos

