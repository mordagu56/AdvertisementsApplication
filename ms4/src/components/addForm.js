import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class addForm extends React.Component {
  constructor () {
    super()

    this.state = {
      advName: '',
      advDate: new Date().toJSON().slice(0,10).replace(/-/g,'/'),
      advKategorie: '',
      advBeschreibung: '',
      userId: '11'
    }

    this.handle = this.handle.bind(this)
  }

  handle (data, val) {
    this.setState({
      [data]: val
    })
  }

  render () {
    const { advName, advKategorie, advBeschreibung } = this.state

    return (
      <div className='login-form'>
        <TextField
          required
          label="Name"
          value={advName}
          onChange={({target: {value}}) => this.handle('advName', value)}
        />
        <TextField
          required
          label="Category"
          value={advKategorie}
          onChange={({target: {value}}) => this.handle('advKategorie', value)}
        />
        <TextField
          required
          label="Description"
          value={advBeschreibung}
          onChange={({target: {value}}) => this.handle('advBeschreibung', value)}
        />
        <Button disabled={advName.length < 2 || advKategorie.length < 2 || advBeschreibung.length < 2} onClick={() => this.props.add(this.state)} variant="contained" color="primary">
          Primary
        </Button>
      </div>
    )
  }
}

export default addForm;
