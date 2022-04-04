import { useForm } from '../../hooks/useForm'
import './effects.css'

export const FormWithCustomHook = () => {
    const [formValues , handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues )
    }

  return (
    <form onSubmit={ handleSubmit }>
        <h1>useEffect</h1>
        <hr />


        <div className="form-group">
            <input
                className="form-control"
                type = "text"
                name = "name"
                value = {name}
                onChange = {handleInputChange}
                placeholder= "name"
            />
        </div>

        <div className="form-group">
            <input
                className="form-control"
                type = "text"
                name = "email"
                value = {email}
                onChange = {handleInputChange}
                placeholder= "email"
            />
        </div>

        
        <div className="form-group">
            <input
                className="form-control"
                type = "password"
                name = "password"
                value = {password}
                onChange = {handleInputChange}
                placeholder= "password"
            />
        </div>
        <button type="submit" className='btn btn-primary'> Guardar </button>

    </form>
  )
}
