import AuthContextProvider from 'contexts/authContext'
import NotifyContextProvider from 'contexts/notifyContext'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// pages
import Index from 'views/Index.js'
import Destacados from 'views/Destacados'
import Grupo from 'views/Grupo'
import Familia from 'views/unidades/Familia'
import Manada from 'views/unidades/Manada'
import Tropa from 'views/unidades/Tropa'
import Sociedad from 'views/unidades/Sociedad'
import Clan from 'views/unidades/Clan'
import Jefatura from 'views/unidades/Jefatura'
import Consejo from 'views/unidades/Consejo'
import Login from 'views/Login'

import PrivateRoute from 'components/PrivateRoute'


function App() {
  return (
    <NotifyContextProvider>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => <Index {...props} />} />
            <Route exact path='/destacados' render={(props) => <Destacados {...props} />} />
            <Route exact path='/grupo' render={(props) => <Grupo {...props} />} />
            <Route exact path='/familia' render={(props) => <Familia {...props} />} />
            <Route exact path='/manada' render={(props) => <Manada {...props} />} />
            <Route exact path='/tropa' render={(props) => <Tropa {...props} />} />
            <Route exact path='/sociedad' render={(props) => <Sociedad {...props} />} />
            <Route exact path='/clan' render={(props) => <Clan {...props} />} />
            <Route exact path='/jefatura' render={(props) => <Jefatura {...props} />} />
            <Route exact path='/consejo' render={(props) => <Consejo {...props} />} />
            <PrivateRoute exact path='/perfil' component={Index} />
            <PrivateRoute exact path='/ingresar' component={Login} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </AuthContextProvider>
    </NotifyContextProvider>
  )
}


export default App