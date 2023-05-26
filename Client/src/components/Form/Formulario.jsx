import "./formulario.css"
import { useState } from "react"
import validation from "../../utils/validation"

function Formulario({ login }) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return (
        <div className="formulario_container">
            <span className="barra_formulario">Rick and Morty - Login</span>

            <form className="formulario" onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    value={userData.name}
                    onChange={handleChange}
                    style={{ width: "90%", margin: "0 auto" }}
                />
                {
                    errors.email
                        ? <p>{errors.email1}</p>
                        : errors.email2
                            ? errors.email2
                            : errors.email3
                }

                <label htmlFor="email">Password: </label>
                <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    style={{ width: "90%", margin: "0 auto" }}
                />
                {
                    errors.password
                        ? <p>{errors.pass}</p>
                        : errors.pass2
                }
                <div>
                    <button className="btn-submit">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Formulario