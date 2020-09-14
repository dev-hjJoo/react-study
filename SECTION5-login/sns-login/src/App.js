import React, {Component} from 'react';
import Header from './Header.js'
import { Link } from 'react-router'


class App extends Component {

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export class Home extends Component {
  render() {
    return (
      <div>
        <h1> 홈페이지 </h1>
      </div>
    )
  }
}

export class First extends Component {
  render() {
    return (
      <div>
        <h2> 1: 첫번째 페이지 </h2>
      </div>
    )
  }
}

export class Second extends Component {
  render() {
    console.dir(this.props)
    return (
      <div>
        <Link to={'/second/1'} style={{marginRight: '5px'}}> 1번 </Link>
        <Link to={'/second/2'}> 2번 </Link>
        {
          this.props.children ? (
            this.props.children
          ) : (
            <div>
              <h3> id를 선택해주세요. </h3>
            </div>
          )
        }
      </div>
    )
  }
}

export class Item extends Component {
  render() {
    return (
      <div>
        <h3> {this.props.params.id} </h3>
      </div>
    )
  }
}

export default App;
