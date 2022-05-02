import React from 'react'

const Login = () => {
  return (
    <div className='fondo-form container-fluid'>
        <h3 className='text-center p-3'>Login to your account</h3>
        <form className='form'>
            <div className="two-fields">
                <div className="inputconicon">
                    <input type="text" name="nombre" id="nombre" className="input-text" placeholder="Name" />
                    <i className="fas fa-user"></i>
                </div>

                <div className="inputconicon">
                    <input type="email" name="email" id="email" className="input-email" placeholder="Email" />
                    <i className="fas fa-envelope"></i>
                </div>


            </div>
            <div className="d-flex justify-content-end">
                <input type="submit" className="btn btn-input" value="Login" />
            </div>
        </form>
    </div>
  )
}

export default Login
