import React from 'react';
import App from './App'
import {HashRouter,Route} from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./admin";
import Buttons from "./pages/ui/button";
import NoMatch from './pages/nomatch'
export default class AdminRouter extends React.Component{
    render() {
        return(
            <HashRouter>
                <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Route path='/admin/ui/buttons' component={Buttons}></Route>
                        </Admin>
                    } />
                    <Route path='/order/detail' component={Login} />
                    <Route component={NoMatch} />

                </App>
            </HashRouter>
        )
    }
}
