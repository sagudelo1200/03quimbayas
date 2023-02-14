import React from 'react'
import Navcontainer from './Navcontainer'
// reactstrap components
import {
  Navbar,
} from 'reactstrap'

function ScrollTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false)
  const [navbarColor, setNavbarColor] = React.useState(
    (document.documentElement.scrollTop > 375 || document.body.scrollTop) > 519
      ? ''
      : ' navbar-transparent'
  )
  const [brandColor, setBrandColor] = React.useState(
    (document.documentElement.scrollTop > 375 || document.body.scrollTop) > 519
      ? 'text-success'
      : ''
  )
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 375 ||
        document.body.scrollTop > 375
      ) {
        setNavbarColor('')
        setBrandColor('text-success')
      } else if (
        document.documentElement.scrollTop < 376 ||
        document.body.scrollTop < 376
      ) {
        setNavbarColor(' navbar-transparent')
        setBrandColor('')
      }
    }
    window.addEventListener('scroll', updateNavbarColor)
    return function cleanup() {
      window.removeEventListener('scroll', updateNavbarColor)
    }
  })
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
      <Navbar className={'fixed-top' + navbarColor} color='white' expand='lg'>
        <Navcontainer collapseOpen={collapseOpen} setCollapseOpen={setCollapseOpen} brandColor={brandColor} />
      </Navbar>
    </>
  )
}

export default ScrollTransparentNavbar
