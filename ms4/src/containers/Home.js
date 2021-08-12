import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';



class Home extends React.Component {
  constructor () {
    super()

    this.goToLogin = this.goToLogin.bind(this)
    this.goToReg = this.goToReg.bind(this)
  }

  goToLogin () {
    this.props.history.push('/login')
  }
  goToReg () {
    this.props.history.push('/registration')
  }

  render () {
    return (
      <div className='home'>
        <div>Welcome to advertisements website!!! </div>
        <Button onClick={this.goToLogin} variant="contained" color="primary">
          Login page
        </Button>
        <Button onClick={this.goToReg} variant="contained" color="primary">
          Registration page
        </Button>
      </div>
    )
  }
}

export default withRouter(Home);
