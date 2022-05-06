import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const Navbar = () => {
  const { store, actions } = useContext(Context)
  const item = store.products.map((items, index) => {

    return (
      <div key={items.producto.name} >
        <li key={items.producto.name} className="d-flex justify-content-center">
          <img src={`../images/${items.producto.imagepath}`} className="imglist mx-2" alt={items.producto.name} />
          <div className='mx-auto'>
            {items.cantidad + " x " + items.producto.name + ": $" + items.producto.price}
            <i className="fas fa-trash-alt my-1 mx-2"
              onClick={() => { actions.removerItem(items, index) }}>
            </i>
          </div>
        </li>
        <hr></hr>
      </div>

    )
  })



  useEffect(() => {
    actions.getItem()

  }, [])

  const { name } = useSelector(state => state.auth)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Home</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Weapons">Weapons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Armor">Armor</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Bestiary">Bestiary</Link>
              </li>
            </ul>
          </div>
          <div className='btn-group mx-2'>
            <Link type="button" className="btn btn-Login" to="/login">Login</Link>
          </div>
          <div className="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fas fa-shopping-cart"></i>
              <span className="p-2 length">{item.length}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
              <div className="dropdown-item p-0">
                <div className='p-1'>{item}</div>
              </div>

              {store.valortot > 0 && <div className='mx-4'>Precio Total: $ {store.valortot}</div>}

            </ul>
          </div>

        </div>


      </nav>
      <div className='text-center mt-4'>
        <h2>Welcome {name} </h2>
      </div>
    </div>
  )
}
