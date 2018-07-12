import React from 'react';

import LoginForm from './LoginForm';

class LoginFormContainer extends React.Component {

    handleEmailChange = (email) => {
        this.props.dispatchChangeEmail(email);
    }

    handlePasswordChange = (password) => {
        this.props.dispatchChangePassword(password);
    }

    handleLogin = () => {
        //this.props.dispatchLogin();

        // Redirect to games

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

export default LoginFormContainer