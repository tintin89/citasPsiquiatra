import React, {useEffect} from 'react';
import StartPage from './components/StartPage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from "./components/Authentication/LoginPage";
import DoctorPage from "./components/AdministrarCitas/DoctorPage";
import {connect} from 'react-redux'
import * as actions from "./store/actions";

const  App=(props)=> {
    useEffect(()=>{
       props.onUpdateUser()

    },[])
  return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path="/entrar">
            <LoginPage/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/administrar">
            <DoctorPage/>
          </Route>
        </Switch>

        <Switch>
      <Route path="/" exact>
        <StartPage/>
      </Route>
        </Switch>

      </BrowserRouter>
        </>
  );
}


const mapDispatchToProps=dispatch=>{
    return {
        onUpdateUser:()=>dispatch(actions.ifUserChange())
    }
}


export default connect(null,mapDispatchToProps)(App);
