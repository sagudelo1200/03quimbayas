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

function Tropa() {
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'tropa'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    console.log(data)
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
                <table className='table border border-success'>
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
                      <td colSpan='2'>Las Patrullas</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Lema:</th>
                      <td colSpan='2'>Siempre Listos</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Edad:</th>
                      <td colSpan='2'>11 a 14 años</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Ambiente:</th>
                      <td colSpan='2'>El Bosque</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Fondo romántico:</th>
                      <td colSpan='2'>La Aventura</td>
                    </tr>

                    <tr>
                      <th scope='row' className='text-right'>Jefe:</th>
                      <td colSpan={2}>Juan David Lopez Garcia </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td colSpan={2}>Mauricio Toro Álvarez</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td colSpan={2}>Gea Ishabella Giraldo Ibatá </td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td colSpan={2}>Sara Jiménez</td>
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

export default Tropa
