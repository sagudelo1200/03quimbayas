import React from 'react'

import WhiteNavbar from 'components/Navbars/WhiteNavbar.js'
import Footer from 'components/Footers/Footer.js'
import { Container } from 'reactstrap'

function Subpage({ title = 'Grupo Scout 03 Quimbayas', children }) {
  React.useEffect(() => {
    document.title = title
    document.body.classList.add('sub-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    var href = window.location.href.substring(
      window.location.href.lastIndexOf('#/') + 2
    )
    var hrefId = href.substring(href.lastIndexOf('#') + 1)
    if (href.lastIndexOf('#') > 0) {
      document.getElementById(hrefId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
    return function cleanup() {
      document.body.classList.remove('sub-page')
      document.body.classList.remove('sidebar-collapse')
    }
  })

  return (
    <>
      <WhiteNavbar />
      <Container style={{
        marginTop: '69px',
        paddingTop: '24px',
      }} >
        {children}
      </Container>
      <Footer />
    </>
  )
}


export default Subpage
