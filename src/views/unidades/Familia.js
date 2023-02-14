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
  // const [data, setData] = useState({})
  const unidad = 'familia'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
    // setData(response.data)
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
          <Container>
            <div className='row justify-content-center'>
              <div className='col-sm-6'>
                <table className='table border border-info'>
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
                      <td colSpan='2'>La Familia</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Lema:</th>
                      <td colSpan='2'>Siempre Obedientes</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Edad:</th>
                      <td colSpan='2'>5 a 7 años</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Ambiente:</th>
                      <td colSpan='2'>La Selva</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Fondo romántico:</th>
                      <td colSpan='2'>La Fantasía</td>
                    </tr>

                    <tr>
                      <th scope='row' className='text-right'>Jefe:</th>
                      <td>Leidy Yuliana Suárez</td>
                      <td><b>RAKSHA</b></td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td>Isabella Correa</td>
                      <td><b>MANG</b></td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td>Juan Pablo Mira Vasquez</td>
                      <td><b></b></td>
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

export default Familia
