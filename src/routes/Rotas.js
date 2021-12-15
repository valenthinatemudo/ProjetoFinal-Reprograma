import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Home from '../pages/Home/Home'
import Nutri from '../pages/Nutricionista/Nutri'
import Doacao from '../pages/Doacao/Doacao'
import Autora from '../pages/Autora/Autora'

function Rotas () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/nutri' component={Nutri} />
            <Route path='/doacao' component={Doacao} />
            <Route path='/autora' component={Autora}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas