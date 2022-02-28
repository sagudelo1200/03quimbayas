import React from 'react'
// reactstrap components
import { Navbar } from 'reactstrap'
import Navcontainer from './Navcontainer'

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className='bg-white fixed-top' expand='lg'>
        <Navcontainer collapseOpen={collapseOpen} setCollapseOpen={setCollapseOpen} />
      </Navbar>
    </>
  )
}

export default WhiteNavbar
