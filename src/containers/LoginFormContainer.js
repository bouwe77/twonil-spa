import { connect } from 'react-redux';
import { changeEmail, changePassword, login } from '../modules/login-module';
import Login from '../components/home/Login';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password
});

const mapDispatchToProps = (dispatch) => ({
  dispatchChangeEmail: (email) => dispatch(changeEmail(email)),
  dispatchChangePassword: (password) => dispatch(changePassword(password)),
  dispatchLogin: () => dispatch(login())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
