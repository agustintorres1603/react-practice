import { useCallback, useState } from "react"
import { Incrementar } from "./Incrementar"

export const CallbackComponent = () => {
  
    const [counter, setCounter] = useState(0) 

    const incrementarPadre = useCallback(
        (val) => {
        //No se pone counter porque se memorizaria, entonces se crea un valor interno en setcounter para evitar el problema.
            setCounter(contador => contador + val)
        }, []
)
  
  return (
    <>
    <h1>Contador: {counter}</h1>
    <Incrementar Incrementar={incrementarPadre}></Incrementar>
    </>
  )
}
