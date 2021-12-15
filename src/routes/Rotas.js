import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Home from '../pages/Home/Home'
import Nutri from '../pages/Nutricionista/Nutri'
import Autora from '../pages/Autora/Autora'

function Rotas () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/nutri' component={Nutri} />
            <Route path='/autora' component={Autora}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas