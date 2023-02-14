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

function Manada() {
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'manada'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
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
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <ScrollTransparentNavbar />
      <div className='wrapper'>
        <Header unidad={unidad} nIntegrantes={nIntegrantes} />
        <section>
          <Container>
            <div className='row justify-content-center'>
              <div className='col-sm-6'>
                <table className='table border border-warning'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'></th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='text-right'>Sistema:</th>
                      <td colSpan='2'>La Manada</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Lema:</th>
                      <td colSpan='2'>Siempre Mejor</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Edad:</th>
                      <td colSpan='2'>7 a 11 años</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Ambiente:</th>
                      <td colSpan='2'>La Selva</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Fondo romántico:</th>
                      <td colSpan='2'>Fantasía (Libro de las tierras Vírgenes)</td>
                    </tr>

                    <tr>
                      <th scope='row' className='text-right'>Jefe:</th>
                      <td>María Isabel Roldán Álvarez</td>
                      <td><b>AKELA</b></td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td>Laura Andrea Ardila Franco</td>
                      <td><b>BAGUEERA</b></td>
                    </tr>
                    <tr className='d-none'>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td>Santiago Agudelo Gaviria</td>
                      <td><b>KAA</b></td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td>Diego Armando Muriel Sanmartin</td>
                      <td><b>BALOO</b></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Manada
