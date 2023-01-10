import React from 'react'

function FunctionalComponent(props) {

    console.log("func comp",props.uname);
  return (
    <div>
        <h1>{props.uname}</h1>
    </div>
  )
}

// export default FunctionalComponent
export default React.memo (FunctionalComponent)