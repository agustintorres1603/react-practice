import React from "react"

export const Incrementar = React.memo(({ Incrementar }) => { 

    console.log("Me estoy redibujando")

    return (
      <button onClick={() => Incrementar(3)}>+1</button>
    )
  }
) 
