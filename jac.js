const form = document.getElementById("registroForm")

const username = document.getElementById("username")
const email = document.getElementById("email")
const edad = document.getElementById("edad")
const password = document.getElementById("password")

function setError(input, message, errorId){
    input.classList.add("input-error")
    input.classList.remove("input-success")
    document.getElementById(errorId).textContent = message
}

function setSuccess(input, errorId){
    input.classList.remove("input-error")
    input.classList.add("input-success")
    document.getElementById(errorId).textContent = ""
}

function validarUsername(){
    const value = username.value.trim()
    if(value.length < 3 || /\d/.test(value)){
        setError(username, "Solo letras, mínimo 3 caracteres", "error-username")
        return false
    }
    setSuccess(username, "error-username")
    return true
}

function validarEmail(){
    const value = email.value.trim()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!regex.test(value)){
        setError(email, "Correo no válido", "error-email")
        return false
    }
    setSuccess(email, "error-email")
    return true
}

function validarEdad(){
    const value = parseInt(edad.value)
    if(isNaN(value) || value < 18 || value > 40){
        setError(edad, "Edad válida entre 18 y 40", "error-edad")
        return false
    }
    setSuccess(edad, "error-edad")
    return true
}

function validarPassword(){
    const value = password.value
    if(value.length < 8 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)){
        setError(password, "Mínimo 8 caracteres, 1 mayúscula y 1 número", "error-password")
        return false
    }
    setSuccess(password, "error-password")
    return true
}

username.addEventListener("input", validarUsername)
email.addEventListener("input", validarEmail)
edad.addEventListener("input", validarEdad)
password.addEventListener("input", validarPassword)

form.addEventListener("submit", function(e){
    e.preventDefault()

    const v1 = validarUsername()
    const v2 = validarEmail()
    const v3 = validarEdad()
    const v4 = validarPassword()

    if(v1 && v2 && v3 && v4){
        alert("Registro exitoso ⚽")
        form.reset()
    }
})