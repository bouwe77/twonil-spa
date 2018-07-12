import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class LoginForm extends React.Component {

  handleEmailChange({ target }) {
    this.props.handleEmailChange(target.value);
  }

  handlePasswordChange({ target }) {
    this.props.handlePasswordChange(target.value);
  }

  handleSubmit = () => {
    this.props.handleLogin();
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type="email" value={this.props.email} onChange={e => this.handleEmailChange(e)} />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.props.password} onChange={e => this.handlePasswordChange(e)} type="password" />
          </FormGroup>

          <Button block bsSize="large" type="submit">Login</Button>

        </form>

      </div>
    );
  }
}

export default LoginForm;
