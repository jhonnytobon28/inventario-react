import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from "./Components/UI/Header";
import { EstadoView } from './Components/Estados/EstadoView'
import { InventarioView } from './Components/Inventario/InventarioView'
import { MarcaView } from './Components/Marcas/MarcaView'
import { TipoView } from './Components/Tipos/TipoView'
import { UsuarioView } from './Components/Usuarios/UsuarioView'
import { InventarioUpdate } from "./Components/Inventario/InventarioUpdate";

const App = () => {
    return <Router>
    <Header/>
    <Switch>
        <Route exact path='/' component={ InventarioView } />
        <Route exact path='/Usuarios' component={ UsuarioView } />
        <Route exact path='/Marcas' component={ MarcaView } />
        <Route exact path='/Estados' component={ EstadoView } />
        <Route exact path='/Tipos' component={ TipoView } />
        <Route exact path='/inventario/edit/:inventarioId' component={ InventarioUpdate } />
        <Redirect to="/" />
    </Switch>
    </Router>
}

export {
    App
}