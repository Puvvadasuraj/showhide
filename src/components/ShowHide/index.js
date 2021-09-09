import {Component} from 'react'
import './index.css'

class showHide extends Component {
  state = {display1: true, display2: true}

  changeValue1 = () => {
    this.setState(prevState => ({display1: !prevState.display1}))
  }

  changeValue2 = () => {
    this.setState(prevState => ({display2: !prevState.display2}))
  }

  render() {
    const {display1, display2} = this.state

    return (
      <div className="container">
        <h1 className="head">Show/Hide</h1>
        <div className="display">
          <div>
            <button type="button" className="but" onClick={this.changeValue1}>
              Show/Hide Firstname
            </button>
            {display1 && <p className="box">Joe</p>}
          </div>
          <div>
            <button type="button" className="but" onClick={this.changeValue2}>
              Show/Hide Lastname
            </button>
            {display2 && <p className="box">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default showHide
