import Dashboard from './pages/dashboard'
import Clientes from  './pages/clientes'
import Agenda from './pages/agenda'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Dashboard} exact />
                <Route path='/clientes' component={Clientes} />
                <Route path='/agenda' component={Agenda} />
                <Route component={() => <div> Page 404! </div>} />
            </Switch>
        </BrowserRouter>
    )
}

export default App