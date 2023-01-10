import React, { Component } from 'react'

export class MyRef extends Component {
    constructor(props){
        super(props)
        this.myRef=React.createRef()
    }
    componentDidMount(){  
        this.myRef.current.focus()
        console.log("myRef".myRef);
    }
  render() {
    return (
      <div>
        <input ref={this.myRef} placeholder="myRef"/>
      </div>
    )
  }
}

export default MyRef