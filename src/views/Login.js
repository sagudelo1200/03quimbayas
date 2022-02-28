import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from 'contexts/authContext'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from 'reactstrap'

import { toast } from 'react-toastify'

// core components
import DropdownScrollNavbar from 'components/Navbars/DropdownScrollNavbar'

function Login() {
  document.title = 'Ingresar - Grupo Scout 03 Quimbayas'
  const history = useHistory()
  const location = useLocation()
  const { login } = useAuth()
  const [firstFocus, setFirstFocus] = useState(false)
  const [lastFocus, setLastFocus] = useState(false)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleRedirectOrBack = () => {
    history.replace(location.state?.from ?? '/')
  }

  const handleSignIn = async e => {
    e.preventDefault()

    const id = toast.loading('Iniciando sesión...', {
      position: toast.POSITION.BOTTOM_CENTER,
    })

    try {
      const user = await login(email, password)

      if (user) {
        toast.update(id, {
          render: 'Ingresaste correctamente',
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
          hideProgressBar: true,
          isLoading: false,
          pauseOnHover: false,
        })
        handleRedirectOrBack()
      }
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.update(id, {
          render: 'No existe un usuario con ese correo',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          autoClose: 3000,
          isLoading: false,
          pauseOnHover: false,
        })
      } else if (error.code === 'auth/wrong-password') {
        toast.update(id, {
          render: 'Contraseña incorrecta',
          type: toast.TYPE.ERROR,
          autoClose: 3000,
          hideProgressBar: true,
          isLoading: false,
          pauseOnHover: false,
        })
      } else {
        toast.update(id, {
          render: 'Error al intentar iniciar sesión',
          type: toast.TYPE.ERROR,
          hideProgressBar: true,
          autoClose: 3000,
          isLoading: false,
          pauseOnHover: false,
        })
      }
    }
  }

  useEffect(() => {
    document.body.classList.add('login-page')
    document.body.classList.add('sidebar-collapse')
    document.documentElement.classList.remove('nav-open')
    window.scrollTo(0, 0)
    document.body.scrollTop = 0
    return function cleanup() {
      document.body.classList.remove('login-page')
      document.body.classList.remove('sidebar-collapse')
    }
  }, [])
  return (
    <>
      <DropdownScrollNavbar />
      <div className='page-header clear-filter my-auto' filter-color='yellow'>
        <div
          className='page-header-image'
          style={{
            backgroundImage:
              'url(https://picsum.photos/1000?grayscale)',
          }}
        ></div>
        <div className='content my-auto'>
          <Container>
            <Row>
              <Col className='ml-auto mr-auto' md='5'>
                <Card className='card-login card-plain'>
                  <Form action='' className='form' method=''>
                    <CardHeader className='text-center'>
                      <div className='logo-container'>
                        <img
                          alt='...'
                          src={require('assets/img/logo.png').default}
                        />
                        <span>
                          Quimbayas soy de <i className='text-danger fas fa-heart' />
                        </span>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          'no-border input-lg' +
                          (firstFocus ? ' input-group-focus' : '')
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='now-ui-icons ui-1_email-85'></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Correo...'
                          type='email'
                          value={email}
                          onFocus={() => setFirstFocus(true)}
                          onBlur={() => setFirstFocus(false)}
                          onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          'no-border input-lg' +
                          (lastFocus ? ' input-group-focus' : '')
                        }
                      >
                        <InputGroupAddon addonType='prepend'>
                          <InputGroupText>
                            <i className='now-ui-icons objects_key-25'></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder='Contraseña...'
                          type='password'
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className='text-center'>
                      <Button
                        block
                        className='btn-round'
                        color='info'
                        href='#03Quimbayas'
                        onClick={handleSignIn}
                        size='lg'
                      >
                        Ingresar
                      </Button>
                    </CardFooter>
                    <div className='pull-right'>
                      <h6>
                        <a
                          className='link footer-link'
                          href='#03Quimbayas'
                          onClick={(e) => {
                            e.preventDefault()
                            alert('Contacte al administrador del sistema')
                          }}
                        >
                          Nececitas ayuda?
                        </a>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Login
