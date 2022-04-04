import { useState } from 'react'
import { Message } from './Message'
import './effects.css'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr />

        <input
            type = "text"
            name = "name"
            value = {name}
            onChange = {handleInputChange}
        />

        <input
            type = "text"
            name = "email"
            value = {email}
            onChange = {handleInputChange}
        />

        {(name === '123') && <Message />}

    </>
  )
}
