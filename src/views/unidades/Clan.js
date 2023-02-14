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

function Clan() {
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const unidad = 'clan'

  const fetchAllData = async () => {
    setLoading(true)
    const response = await fetchData(unidad)
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
          <Container className='La Mejor Unidad'>
            <div className='row justify-content-center'>
              <div className='col-sm-6'>
                <table className='table border border-danger'>
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
                      <td colSpan='2'>El Individuo Asociado</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Lema:</th>
                      <td colSpan='2'>Siempre Servir</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Edad:</th>
                      <td colSpan='2'>18 a 22 años</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Ambiente:</th>
                      <td colSpan='2'>El Mundo</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Fondo romántico:</th>
                      <td colSpan='2'>La Libertad</td>
                    </tr>

                    <tr>
                      <th scope='row' className='text-right'>Jefe:</th>
                      <td colSpan='2'>Héctor Gómez Mejia</td>
                    </tr>
                    <tr>
                      <th scope='row' className='text-right'>Subjefe:</th>
                      <td colSpan='2'>Cristian Zapata</td>
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

export default Clan
