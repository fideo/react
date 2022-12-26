import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {formState, onInputChange, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  })

  //const {username, email, password} = formState;

  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Escribe tu usuario"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Escribe tu dirección de mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Escribe tu contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

    </>
  )
}

