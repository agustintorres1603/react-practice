import { useForm } from "../hooks/useForm"

export const FormularioComponent = () => {
  
    const initialForm = {
        userName: '',
        email: '',
        password: ''
    }

    const {formState, onInputChange} = useForm(initialForm)

    //Desestructurar para poder usar información
    const {userName, email, password} = formState

    const onSubmit = (event) => {
        event.preventDefault() //Evita que recargue
        console.log(formState)
    }

    return (
    // onSubmit = {(event) => onSubmit(event)} no es necesario porque se pasa el mismo parametro, event.
    <form onSubmit={onSubmit}>  
        <div className="form-group">
            <label htmlFor="userName">User name</label>
            <input 
                type="text" 
                className="form-control" 
                name="userName" 
                placeholder="Enter your Username"
                value={userName}
                onChange={onInputChange} //Como solo se pasa el mismo evento, no es necesario pasarlo como parametro.
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Enter email"
                value={email}
                onChange={onInputChange} //Como solo se pasa el mismo evento, no es necesario pasarlo como parametro.
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-control" 
                name="password" 
                placeholder="Password"
                value={password}
                onChange={onInputChange} //Como solo se pasa el mismo evento, no es necesario pasarlo como parametro.
            />
        </div>
        <button 
            type="submit" 
            className="btn btn-primary">
            Submit
        </button>
    </form>
  )
}
