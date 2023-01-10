import React, { useEffect, useState } from 'react'

function UseEffectWithArray() {
    const [birds, setbirds] = useState([])
    const [count, setcount] = useState()
    console.log("birds",birds);
    
    useEffect(()=>{
        if(birds.length>0){
            console.log("one bird added");
            let updateCount=count
            updateCount+=1
            setcount(updateCount)
        }
    },birds.length)

    let addBird=()=>{
        let birdsCopy=[...birds]
        birdsCopy.push("peacock")
        setbirds(birdsCopy)
    }
  return (
    <div>
        <button onClick={addBird}>Add bird</button>
        {
            birds.map((val,idx)=>{
                return <li key={idx}>{val}</li>
            })
        }
        <h1>{count}</h1>
    </div>
  )
}

export default UseEffectWithArray