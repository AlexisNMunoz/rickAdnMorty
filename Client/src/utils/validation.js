// eslint-disable-next-line import/no-anonymous-default-export
export default (data) => {
    let errors = {}

    if (!/\S+@\S+\.\S+/.test(data)) {
        errors.email1 = "Email no es valido"
    }

    if (!data.email) {
        errors.email2 = "Ingresa un email"
    }

    if (data.email.length < 20) {
        errors.email3 = "No Debe ser menor a 35 caracteres"
    }

    if (!/\d/.test(data.password)) {
        errors.pass = "Debe tener almenos 1 numero"
    }

    if (data.password.length < 6 || data.password.length > 10) {
        errors.pass2 = "Debe tener almenos 6 caracteres y menos de 10"
    }

    return errors
}