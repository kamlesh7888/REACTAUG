import { useState } from "react";

export default function UseffectName() {
    let [name, setName] = useState("Niranjan");
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={() => setName("Anup")}>Change Name</button>
      <button onClick={()=>setName("Unchanged")}>Reset</button>
    </div>
  )
}
