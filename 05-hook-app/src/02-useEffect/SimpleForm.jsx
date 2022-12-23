import { useState } from "react"

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'strider',
    email: 'federicomazzei@gmail.com'
  })

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="federicomazzei@gmail.com"
        name="email"
      />
      
    </>
  )
}

