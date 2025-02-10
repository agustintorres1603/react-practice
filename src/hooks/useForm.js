import { useState } from "react";

export const useForm = (initialForm) => {
    
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
       const {name, value} = target //Desestructurar name y value de target del evento
       setFormState({
            ...formState, // Spreed Operator para mantener los otros 2 valores que no se estan modificando
            [name]: value //Nombre se pone en llaves para mantener el actual y modificarlo sobre ello
       })
    }

    return {
    ...formState,
    formState,
    onInputChange
  }
}
