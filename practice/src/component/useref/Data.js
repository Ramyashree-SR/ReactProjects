import React, { useState } from "react";

function Data() {
  const [data, setdata] = useState("Ramya");

  console.log("data",data);

  
  return (
    
    <div>
      <input
        type="text"
        placeholder="message"
        id="d"
        name="message"
        value={data.message}
        onChange={() => {
          setdata("Renu");
        }}
      />
      
    </div>
  );
}

export default Data;
