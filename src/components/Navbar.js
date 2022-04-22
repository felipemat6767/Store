import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const Navbar = () => {
  const { store, actions } = useContext(Context)

  const item = store.products.map((items, index) => {
    
    return (
      <div key={items.producto.name} >
        <li key={items.producto.name} className="d-flex">
          {items.producto.name + ": " + items.producto.price}
          <i className="fas fa-trash-alt mx-1"
            onClick={() => { actions.removerItem(items, index)}}>
          </i>
          <hr></hr>
        </li>
      </div>
    )
  })



  useEffect(() => {
    actions.getItem()

  }, [])


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/Weapons">Weapons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Armor">Armor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Bestiary">Bestiary</a>
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-shopping-cart"></i>
            <span className="p-2 length">{item.length}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
            <div className="dropdown-item p-0">
              <div className='p-1'>{item}</div>
            </div>
            <div className='mx-4'>Precio Total: {store.valortot}</div>
          </ul>
        </div>

      </div>
    </nav>
  )
}
