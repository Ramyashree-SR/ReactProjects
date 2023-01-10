import React, { Component, PureComponent } from 'react'

/*
When a class compoment is extending to PureComponent
whenever state or props is changed in shouldComponent update method
shallow comparison of the state or props will be done and if at all if there 
are some changes in state or props the next lifecycle methods of updating phase
will be executed i.e. , render(), getSnapshotBeforeUpdate(), componentDidUpdate()

Else the next lifecycle methods of updating phase will not executed and render will be avoided

NOTE : It does shallow comparison not deep comparison

*/
export class RegularComponent extends PureComponent{
  render() {
      console.log("Reg Comp", this.props.uname);
    return (
      <div>
<h1>{this.props.uname}</h1>
      </div>
    )
  }
}

export default RegularComponent