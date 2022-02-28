import React, { useState, useEffect } from 'react'
import fetchData from './functions/fetchData'
// reactstrap components
import {
  Container,
} from 'reactstrap'

// core components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js'
import Header from './components/Header.js'
import Footer from 'components/Footers/Footer.js'

function Familia() {
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'familia'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    console.log(response)
    setData(response.data)
    setIntegrantesN(response.integrantes)
    setLoading(false)
  }

  useEffect(() => {
    document.body.classList.add('profile-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0

    fetchAllData()

    return function cleanup() {
      document.body.classList.remove('profile-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <Header unidad={unidad} nIntegrantes={nIntegrantes} />
        <section>
          <Container className='text-center'>
            <h3 className='title my-0'>Jefe</h3>
            <h4 className='my-0'>{data.jefe}</h4>
            <h3 className='title my-0'>Subjefes</h3>
            {data.subjefes?.map((subjefe, index) => (
              <h4 className='my-0' key={index}>{subjefe}</h4>
            )) || <h4 className='my-0'>...</h4>}
            <h3 className='title my-0'>Fondo Romántico</h3>
            <h4 className='my-0'>{data.fondoRomantico}</h4>
            <h3 className='title my-0'>Ambiente</h3>
            <h4 className='my-0'>{data.ambiente}</h4>
            <h3 className='title my-0'>Lema</h3>
            <h4 className='my-0'>{data.lema}</h4>
            <h3 className='title my-0'>Edades</h3>
            <h4 className='my-0'>{data.edades}</h4>
            <h3 className='title my-0'>Sistema</h3>
            <h4 className='my-0'>{data.sistema}</h4>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Familia
