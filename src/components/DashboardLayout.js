import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Footer from './Footer'
import Home from './Home'
import Menu from './Menu'
import Navbar from './Navbar';

function DashboardLayout(props) {
    const matchPath = props.match.path;  
  return (
        <div className="dashboardLayout">
        <Navbar/>
        <Switch>
        <Route exact path={`${matchPath}`} render={(props) => (matchPath === "/" ? (<Home {...props} />) :
        (matchPath ==="/menu" ? (<Menu {...props} />) : 0))} />
        </Switch>
        <Footer/>
        </div>
    )
}
export default React.memo(DashboardLayout)
