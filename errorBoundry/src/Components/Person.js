import React from 'react'

function Person(props) {
  return (
    <div>I M Person
        {/* to generate error in component */}
        {props.data.splice()}
    </div>
  )
}

export default Person