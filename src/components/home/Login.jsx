import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { changeEmail, changePassword, processLogin } from '../../modules/login-module';

import LoginForm from './LoginForm';

class Login extends React.Component {

    handleEmailChange = (email) => {
        this.props.dispatch(changeEmail(email));
    }

    handlePasswordChange = (password) => {
        this.props.dispatch(changePassword(password));
    }

    handleLogin = () => {
        this.props.dispatch(processLogin());

        // Redirect to games after successful login
        this.props.history.push('/games')
    }

    render() {
        return (
            <div>
                <LoginForm
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogin={this.handleLogin} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    email: state.email,
    password: state.password,
    loggedIn: state.loggedIn
});

export default withRouter(connect(mapStateToProps)(Login));
