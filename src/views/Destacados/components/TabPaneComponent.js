import { useEffect, useState } from 'react'
import {
  TabPane,
  Row,
  Col,
} from 'reactstrap'

// firestore collection: unidades/unidad/destacados
import { db } from 'firebaseApp'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const TabPaneComponent = ({ unidad }) => {
  const tabId = `pills${unidad}`
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  let type, title

  switch (unidad) {
    case 'familia':
      type = 'cachorr@'
      title = 'Familia Mohwa'
      break
    case 'manada':
      type = 'lobat@'
      title = 'Manada Seoonee'
      break
    case 'tropa':
      type = 'scout'
      title = 'Tropa Arawak'
      break
    case 'sociedad':
      type = 'pioner@'
      title = 'Sociedad Sion'
      break
    case 'clan':
      type = 'rover'
      title = 'Clan Taironas'
      break
    case 'grupo':
      title = 'Grupo Scout'
      break
    default:
      type = 'integrante'
      break
  }

  const fetchData = async () => {
    setLoading(true)
    let newData = []
    const querySnapshot = await getDocs(collection(db, `unidades/${unidad}/destacados`))
    querySnapshot.forEach(doc => {
      newData.push({
        ...doc.data(),
        id: doc.id,
      })
    })
    setData(newData)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  return (
    <TabPane tabId={tabId}>
      <h2 className='title text-center'>
        <Link to={`/${unidad}`} className='text-dark'>
          {title}
        </Link>
      </h2>
      {loading === true ? (
        <div className='text-center'>
          <i className='fas fa-spinner fa-spin fa-3x' />
        </div>
      ) : data.length === 0 ? (
        <div className='text-center'>
          <h4>Sin resultados</h4>
        </div>
      ) : (
        data.sort((a, b) => b.id - a.id).map(item => (
          <div key={item.id} className='text-center'>
            <h3 className='display-4'>{item.id}</h3>
            <Row className='justify-content-center'>
              <Col className='mr-md-4 mb-4' xs={7} sm={6} md={4}>
                <img
                  src={item.fotoIntegrante}
                  alt={item.integrante}
                  className='img-fluid rounded shadow'
                />
                <h4 className='font-weight-bold'>{item.integrante}</h4>
                <h5>Mejor {type}</h5>
              </Col>
              <Col className='ml-md-4' xs={7} sm={6} md={4}>
                <img
                  src={item.fotoAspirante}
                  alt={item.aspirante}
                  className='img-fluid rounded shadow'
                />
                <h4 className='font-weight-bold'>{item.aspirante}</h4>
                <h5>Mejor {type !== 'lobat@' ? `Aspirante ${type}` : 'lobezn@'}</h5>
              </Col>
            </Row>
          </div>
        ))
      )}
    </TabPane>
  )
}


export default TabPaneComponent
