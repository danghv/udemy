import React, { Component } from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
// import * as actions from '../actions'
import fetchUser from '../actions'

import Header from './Header'
import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
    componentDidMount() {
        this.props.onLoadUser()
    }
    render() {
        console.log(this.props.auth)
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    
}
const mapDispatchtoProps = (dispatch) => ({
    onLoadUser: () => dispatch(fetchUser())
})



export default connect(null, mapDispatchtoProps)(App)