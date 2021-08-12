import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

import { withRouter } from 'react-router-dom'

const host = 'http://10.101.108.5:8080'

class Login extends React.Component {
  constructor () {
    super()

    this.state = {
      isLogged: false,
      login: '',
      password: '',
      loading: false
    }

    this.auth = this.auth.bind(this)
    this.goToPage = this.goToPage.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
  }

  handleLogin ({target: {value}}) {
    this.setState({
      login: value
    })
  }

  handlePassword ({target: {value}}) {
    this.setState({
      password: value
    })
  }

  auth () {
    const { goToPage, setState } = this
    const ss = this.setState.bind(this)
    ss({loading: true})

    axios({
      method: 'post',
      url: `${host}/login`,
      data: {
        email: this.state.login,
        password: this.state.password
      }
    })
    .then(function (response) {
      goToPage()
    })
    .catch(function (error) {
      alert('password was incorrect')
      ss({loading: false})
    });

  }

  goToPage () {
    this.props.history.push('/page')
  }

  render () {
    const { login, password, loading } = this.state

    if (loading) return <div>LOADING!!!!!!!!</div>

    return (
      <div className='login-form'>
        <TextField
          required
          label="Login"
          value={login}
          onChange={this.handleLogin}
        />
        <TextField
          required
          label="Password"
          type="password"
          value={password}
          onChange={this.handlePassword}
        />
        <Button disabled={(login.length < 3 || password.length < 3) ? true : false} onClick={this.auth} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    )
  }
}

export default withRouter(Login);
