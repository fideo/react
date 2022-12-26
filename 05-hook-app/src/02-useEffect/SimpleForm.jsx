import { useEffect, useState } from "react"
import { Messaje } from "./Messaje";

export const SimpleForm = () => {

  const [formState, setformState] = useState({
    username: 'strider',
    email: 'federicomazzei@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setformState({
      ...formState,
      [name]: value
    })

  }

  useEffect( () => {
    // console.log('useEffect se llamó');
  }, []);

  useEffect( () => {
    // console.log('formState cambió');
  }, [formState]);

  useEffect( () => {
    // console.log('email cambió');
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      
      {
        (username==='strider2') && <Messaje />
      }

      <input
        type="email"
        className="form-control mt-2"
        placeholder="federicomazzei@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      

    </>
  )
}

