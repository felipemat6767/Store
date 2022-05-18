import React from 'react'
import { useForm } from '../hooks/useForm';
import { useDispatch } from "react-redux"
import { StartLogin } from "../actions/auth"
import { Link } from 'react-router-dom';
const Login = () => {

    const dispatch = useDispatch()
    const [formLoginValues, handleLoginInputChange] = useForm({
        lEmail: "Felipe_6767@gmail.com",
        lPassword: "123456"
    });

    const { lEmail, lPassword } = formLoginValues
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(StartLogin(lEmail, lPassword));;
    }

    return (
        <div className='fondo-form container-fluid'>
            <div> 
                <h3 className='text-center p-3'>Login to your account</h3>
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
            <div className='d-flex justify-content-'>
                <Link to="/Register" type='button' className='mt-4'>Crear Cuenta 
                </Link>
            </div>
        </div>


    )
}

export default Login
