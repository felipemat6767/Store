import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux"
import { startRegister } from "../actions/auth"
import Swal from 'sweetalert2';
/*const Register = () => {

    const dispatch = useDispatch()
    const [formRegisterValues, handleRegisterInputChange] = useForm({
        rName: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword1 !== rPassword2) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales', 'error');
        }
        console.log('?')
        dispatch(startRegister(rEmail, rPassword1, rName));
    }
    return (
        <div className='fondo-form container-fluid'>
            <div className="col-md-6 login-form-2">
                <h3>Registro</h3>
                <form onSubmit={handleRegister}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            name="rName"
                            value={rName}
                            onChange={handleRegisterInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Correo"
                            name="rEmail"
                            value={rEmail}
                            onChange={handleRegisterInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="rPassword1"
                            value={rPassword1}
                            onChange={handleRegisterInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repita la contraseña"
                            name="rPassword2"
                            value={rPassword2}
                            onChange={handleRegisterInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="submit"
                            className="btnSubmit"
                            value="Crear cuenta" />
                    </div>
                </form>

                <form>
                    <input type="text" id="choose" name="name" required minlength="6" maxlength="10" pattern="[A-Za-z]+" onErrorCapture={"Debe ser un nombre valido"}  oninvalid="this.setCustomValidity('Please Enter valid email')"/>
                
                    <input type="number" min="18" max="99" step="1" id="n1" name="age"
           pattern="\d+" />


                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        oninvalid="Invalid Email"
                        required
                    />


                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        minLength={6}
                        oninvalid="Invalid Password"
                        required

                    />


                    <button type='Submit'>Submit</button>
                </form>
            </div>
        </div>


    )
} */


const Register = () => {
    const [formelement, setformelement] = useState({
        name: "",
        password: "",
        email: "",
        age: ""
    })

    const { name, password, email, age } = formelement
    const handleRegisterInputChange = ({ target }) => {
        setformelement({
            ...formelement,
            [target.name]: target.value
        })

    }
    

    const handleRegister = (e) => {
        e.preventDefault()
        var numbers = /[0-9]/g
        var characters = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
        if (name.length < 4 || name.match(numbers)) {
            Swal.fire({
                icon: 'error',
                title: "ERROR",
                text: "Name has to be valid",
                timer: 2000,
            })
        } 
        if(!password.match(characters)){
            Swal.fire({
                icon: 'error',
                title: "ERROR",
                text: "Password must include minimum eight characters, at least one uppercase letter, one lowercase letter and one number:",
                timer: 2000,
            })
        }
        if(!age.match(numbers) || age < 18){
            Swal.fire({
                icon: 'error',
                title: "ERROR",
                text: "Age must be a valid number",
                timer: 2000,
            })
        }
    }

   
return (
    <div>
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={handleRegisterInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Edad"
                    name="age"
                    value={age}
                    onChange={handleRegisterInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo"
                    name="email"
                    value={email}
                    onChange={handleRegisterInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleRegisterInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    type="submit"
                    className="btnSubmit"
                    value="Crear cuenta" />
            </div>
        </form>
    </div>
)
}
export default Register
