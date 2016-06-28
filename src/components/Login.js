import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton, TextField } from 'material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { fetchLogin } from '../actions/login';

const Login = ({ dispatch, err }) => {
  let username;
  let password;
  const buttonstyle = {
    margin: 12,
  };
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Grid>
        <Row center="xs" center="sm" center="md" center="lg">
          <Col xs={8} sm={8} md={6} lg={6}>
            <h1> ShareFun </h1>
            <form
              onSubmit={e => {
                e.preventDefault();
                if (!username.getValue() || !password.getValue()) {
                  return;
                }
                dispatch(fetchLogin(username.getValue(), password.getValue()));
                username.getInputNode().value = '';
                password.getInputNode().value = '';
              }}
            >
              <Row>
                username: <TextField
                  onChange={event => { username = event.target.value; }}
                />
              </Row>
              <Row>
                password : <TextField
                  onChange={event => { password = event.target.value; }}
                  errorText={err ? 'invalid password' : ''}
                />
              </Row>
              <RaisedButton primary type="submit" style={buttonstyle} >
                login
              </RaisedButton>
            </form>
          </Col>
        </Row>
      </Grid>
    </MuiThemeProvider>
   );
};

Login.propTypes = {
  dispatch: React.PropTypes.func,
  err: React.PropTypes.bool,
};

export default Login;
