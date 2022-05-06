import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux"
import { StartLogin, startRegister } from "../actions/auth"
import Swal from 'sweetalert2';
const Login = () => {

    const dispatch = useDispatch()
    const initialForm = {
        name: '',
        age: 0,
        email: ''
    };

    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: "Felipe_6767@gmail.com",
        lPassword: "123456"
    });
    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'Nando',
        rEmail: 'nando@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;
    const { lEmail, lPassword } = formLoginValues
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(StartLogin(lEmail, lPassword));;
    }

    const handleRegister = ( e ) => {
        e.preventDefault();

        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        console.log('?')
        dispatch( startRegister( rEmail, rPassword1, rName ) );
    }
    return (
        <div className='fondo-form container-fluid'>
            <div> <h3 className='text-center p-3'>Login to your account</h3>
                <form className='form' onSubmit={handleLogin}>
                    <div className="two-fields">
                        <div className="inputconicon">
                            <input type="email" name="lEmail" id="email" className="input-email" placeholder="Email" value={lEmail} onChange={handleLoginInputChange} />
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="inputconicon">
                            <input type="password" name="lPassword" id="nombre" className="input-text" placeholder="Name" value={lPassword} onChange={handleLoginInputChange} />
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <input type="submit" className="btn btn-input" value="Login" />
                    </div>
                </form>
            </div>


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
            </div>
        </div>


    )
}

export default Login
