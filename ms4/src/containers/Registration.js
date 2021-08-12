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
      fullName:'',
      email: '',
      password: '',
      loading: false
    }

    this.register = this.register.bind(this)
    this.goToLogin = this.goToLogin.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleFullname = this.handleFullname.bind(this)
  }

  handleEmail ({target: {value}}) {
    this.setState({
      email: value
    })
  }

  handlePassword ({target: {value}}) {
    this.setState({
      password: value
    })
  }
  handleFullname ({target: {value}}) {
    this.setState({
      fullName: value
    })
  }

  register () {
    const { goToLogin, setState } = this
    const ss = this.setState.bind(this)
    ss({loading: true})

    axios({
      method: 'post',
      url: `${host}/register`,
      data: {
        email: this.state.email,
        password: this.state.password,
        fullName: this.state.fullName
      }
    })
    .then(function (response) {
      ss({loading: false})
      console.log(response)
      goToLogin()
    })
    .catch(function (error) {
      ss({loading: false})
      console.log(error)
      alert('error');
    });

  }

  goToLogin () {
    this.props.history.push('/login')
  }

  render () {
    const { email, password, loading, fullName } = this.state

    if (loading) return <div>LOADING!!!!!!!!</div>

    return (
      <div className='login-form'>
        <TextField
          required
          label="Email"
          value={email}
          onChange={this.handleEmail}
        />
        <TextField
          required
          label="Password"
          type="password"
          value={password}
          onChange={this.handlePassword}
        />
        <TextField
          required
          label="Fullname"
          value={fullName}
          onChange={this.handleFullname}
        />
        <Button disabled={(fullName.length < 3 || email.length < 3 || password.length < 3) ? true : false} onClick={this.register} variant="contained" color="primary">
          Register
        </Button>
      </div>
    )
  }
}

export default withRouter(Login);
