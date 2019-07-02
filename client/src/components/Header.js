import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'
import axios from 'axios'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li key={1}><a href="/auth/google">Login with Google</a></li>,
                    <li key={2}><a href="/auth/facebook">Login with Facebook</a></li>,
                    <li key={3}>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                axios.post('/auth/login', { email: 'test@gmai.com', password: '123'})
                                    .then(res => console.log('...', res))
                            }}>Login
                        </a>
                    </li>,
                    <li key={4}>
                    <a
                        onClick={(e) => {
                            e.preventDefault()
                            axios.post('/signup', { email: 'test@gmai.com', password: '123'})
                                .then(res => console.log('...', res))
                        }}>Signup
                    </a>
                </li>
                ]
            default:
                return [
                    <li key={1}> <Payments /> </li>,
                    <li key={2}><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>

                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header)