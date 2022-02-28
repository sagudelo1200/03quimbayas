import React, { useEffect, useState } from 'react'
import fetchData from './functions/fetchData'

// reactstrap components
/* import {
  Button,
  Container,
  UncontrolledTooltip,
} from 'reactstrap' */

// core components
import ScrollTransparentNavbar from 'components/Navbars/ScrollTransparentNavbar.js'
import Header from './components/Header.js'
import Footer from 'components/Footers/Footer.js'

function Consejo() {
  const [loading, setLoading] = useState(true)
  const [nIntegrantes, setIntegrantesN] = useState(loading)
  const [data, setData] = useState({})
  const unidad = 'consejo'

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
        {/*         <div className='section'>
          <Container>
            <div className='button-container'>
              <Button
                className='btn-round mr-1'
                color='info'
                href='#pablo'
                onClick={(e) => e.preventDefault()}
                size='lg'
              >
                Follow
              </Button>
              <Button
                className='btn-round btn-icon mr-1'
                color='default'
                href='#pablo'
                id='tooltip871723210'
                onClick={(e) => e.preventDefault()}
                size='lg'
              >
                <i className='fab fa-twitter'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip871723210'>
                Follow me on Twitter
              </UncontrolledTooltip>
              <Button
                className='btn-round btn-icon'
                color='default'
                href='#pablo'
                id='tooltip259363830'
                onClick={(e) => e.preventDefault()}
                size='lg'
              >
                <i className='fab fa-instagram'></i>
              </Button>
              <UncontrolledTooltip delay={0} target='tooltip259363830'>
                Follow me on Instagram
              </UncontrolledTooltip>
            </div>
            <h3 className='title'>About me</h3>
            <h5 className='description text-center'>
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
          </Container>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Consejo
