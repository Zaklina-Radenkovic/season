import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  //initiallizing state within constructor
  // constructor(props) {
  //   super(props)
  //   //this.state = {} // this is state object that is going to contain some properties that are relevant and important to our component
  //   this.state = { lat: null, errorMessage: '' }
  // }

  //ANOTHER WAY  OF INITIALIZING STATE (out of constructor)
  state = { lat: null, errorMessage: '' }

  // componentDidMount() {
  //   //console.log('Component was renderd to the screen')
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) =>
  //       // console.log(position),
  //       //we call setState to update state
  //       this.setState({ lat: position.coords.latitude }),
  //     (err) =>
  //       // console.log(err)
  //       this.setState({ errorMessage: err.message })
  //   )
  // }

  //short version
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }
  componentDidUpdate() {
    console.log('Component was just updated - rendered')
  }

  contentDisplay = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className=''>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please, accept location request' />
  }

  render() {
    return <>{this.contentDisplay()}</>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
