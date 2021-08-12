import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import AddForm from '../components/addForm'


const host = 'http://10.101.108.9:8080'

class Page extends React.Component {
  constructor () {
    super()

    this.state = {
      data: [],
      updating : false,
      waitingForUpdate:{}
    }

    this.getData = this.getData.bind(this)
    this.remove = this.remove.bind(this)
    this.addAdver = this.addAdver.bind(this)
    this.updateAdver = this.updateAdver.bind(this)
    this.update = this.update.bind(this)
    this.handleForUpdate = this.handleForUpdate.bind(this)
  }

  getData () {
    const ss = this.setState.bind(this)
    ss({updating: true})
    axios({
      method: 'get',
      url: `${host}/getAdver`
    })
    .then(function ({data}) {
      ss({updating: false})
      ss({data})
    })
    .catch(function (error) {
      ss({updating: false})
      console.log(error)
    });
  }

  componentDidMount () {
    this.getData()
  }

  update (id) {
    this.setState((p) => {
      const arr = p.waitingForUpdate
      arr[id] = {}
      return {
        waitingForUpdate: arr
      }
    })
  }

  handleForUpdate (id, data, val) {
    this.setState((p) => {
      const arr = p.waitingForUpdate
      arr[id][data] = val
      return {
        waitingForUpdate: arr
      }
    })
  }

  updateAdver (id) {
    const { getData, setState } = this
    const ss = setState.bind(this)
    const {data, waitingForUpdate} = this.state
    ss({updating: true})
    const finalObj = Object.assign({}, data.find(el => el.advId == id), waitingForUpdate[id])
    axios({
      method: 'put',
      url: `${host}/AdUpdateById/${id}`,
      headers: { 'content-type': 'application/json' },
      data: finalObj
    })
    .then(function ({data}) {
      ss({updating: false, waitingForUpdate: {}})
      getData()
    })
    .catch(function (error) {
      ss({updating: false})
      console.log(error)
    });
  }

  addAdver ({advName,advDate,advKategorie,advBeschreibung,userId}) {
    const { getData, setState } = this
    const ss = setState.bind(this)
    ss({updating: true})
    axios({
      method: 'post',
      url: `${host}/Advertisment`,
      headers: { 'content-type': 'application/json' },
      data: {
        advName,
        advDate,
        advKategorie,
        advBeschreibung,
        userId,
        advId: Math.random()
      }
    })
    .then(function ({data}) {
      ss({updating: false})
      getData()
    })
    .catch(function (error) {
      ss({updating: false})
      console.log(error)
    });
  }

  remove (id) {
    const { getData, setState } = this
    const ss = setState.bind(this)
    ss({updating: true})
    axios({
      method: 'delete',
      url: `${host}/AdDeleteById/${id}`,
      headers: { 'content-type': 'application/json' },
      data: {

      }
    })
    .then(function ({data}) {
      ss({updating: false})
      getData()
    })
    .catch(function (error) {
      ss({updating: false})
      console.log(error)
    });
  }

  render () {
    if (this.state.data.length < 1 || this.state.updating) return <div>Loading.......</div>

    return (
      <React.Fragment>
        <div className='page'>
          {
            this.state.data.map(({
              advId,
              advName,
              advDate,
              advKategorie,
              advBeschreibung,
              userId
            }) => (
              <div key={advId} className='listing'>
                <Card >
                  <CardContent>
                    <Typography color="textSecondary" component="h6">
                      {advDate}
                    </Typography>
                    {Object.keys(this.state.waitingForUpdate).indexOf(advId) >= 0 ? (
                      <TextField
                        defaultValue={advKategorie}
                        onChange={({target: {value}}) => this.handleForUpdate(advId, 'advKategorie', value)}
                      />
                    ) : (
                      <Typography color="textSecondary">
                        {advKategorie}
                      </Typography>
                    )}
                    {Object.keys(this.state.waitingForUpdate).indexOf(advId) >= 0 ? (
                      <TextField
                        defaultValue={advName}
                        onChange={({target: {value}}) => this.handleForUpdate(advId, 'advName', value)}
                      />
                    ) : (
                      <Typography variant="headline" component="h2">
                        {advName}
                      </Typography>
                    )}
                    {Object.keys(this.state.waitingForUpdate).indexOf(advId) >= 0 ? (
                      <TextField
                        defaultValue={advBeschreibung}
                        onChange={({target: {value}}) => this.handleForUpdate(advId, 'advBeschreibung', value)}
                      />
                    ) : (
                      <Typography  color="textSecondary">
                        {advBeschreibung}
                      </Typography>
                    )}
                    <Typography component="p">
                      UserId: {userId}
                  </Typography>
                </CardContent>
                <CardActions>
                  {Object.keys(this.state.waitingForUpdate).indexOf(advId) === -1 && <Button onClick={() => this.remove(advId)} size="small">Remove</Button>}
                  {Object.keys(this.state.waitingForUpdate).indexOf(advId) === -1 && <Button onClick={() => this.update(advId)} size="small">Update</Button>}
                  {Object.keys(this.state.waitingForUpdate).indexOf(advId) >= 0 && <Button onClick={() => this.updateAdver(advId)} size="small">Save</Button>}
                </CardActions>
              </Card>
            </div>
            ))
          }
        </div>
        <AddForm add={this.addAdver} />
      </React.Fragment>
    )
  }
}

export default Page;
