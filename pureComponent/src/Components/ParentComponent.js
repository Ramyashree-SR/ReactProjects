import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import FunctionalComponent from './FunctionalComponent';

export class ParentComponent extends Component {
    state={
        uname: "Ajay"
    }
     componentDidMount(){
        setInterval(()=>{
         this.setState({
             uname: "Vijay"
         })
        },1000)
    }


  render(){
      return (
      <div>
        <RegularComponent uname={this.state.uname} />
        <FunctionalComponent uname={this.state.uname} />


      </div>
    )
}
}

export default ParentComponent