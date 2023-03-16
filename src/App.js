import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await axios('http://localhost:8080/users', {
        method: 'POST',
        data: JSON.stringify(input),
        headers: {
          'Content-Type': 'application/json'
        }

      })
    } catch(err) {}
  }

  const handleInputChange = e => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <>
      <h1>Registro de usuarios</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre</label>
            <input type="text" name="first_name" value={input.first_name} onChange={handleInputChange} />
            <label>Apellido</label>
            <input type="text" name="last_name" value={input.last_name} onChange={handleInputChange} />
            <label>Email</label>
            <input type="text" name="email" value={input.email} onChange={handleInputChange} />
            <input type="submit"></input>
        </div>
      </form>
    </>
  )
}

export default App