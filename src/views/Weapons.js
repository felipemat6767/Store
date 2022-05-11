import React, { useContext } from 'react'
import { Tierfilt } from '../tools/tierfilt'
import { Toolslist } from '../tools/toolslist'
import { Weaponsfilt } from '../tools/Weaponsfilt'
import { Context } from '../store/appContext'
import { Filtercopy } from '../components/Filter copy'
import { PriceLtoM, PriceMtoL2 } from '../tools/Pricefilt'

export const Weapons = () => {
  const { store } = useContext(Context)
  return (
    <div>
      <nav className="d-flex justify-content-end mt-3">
        <div className="">
          <span className='colorcollapse'>Filter By</span>
          <button className="p-2 color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars "></i>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <Filtercopy />
        <span className="navbar-toggler-icon"></span>
      </div>
      <div className='d-flex row'>
        <div className='col-1'></div>
        <div className='col-10'>{(store.category === "Ursine") ? <Weaponsfilt type="Ursine-Weapon" /> : (store.category === "Feline") ? <Weaponsfilt type="Feline-Weapon" /> : (store.category === "Enhanced") ? <Tierfilt tier="Enhanced" /> : (store.category === "Base") ? <Tierfilt tier="Base" /> : (store.category === "MtoL") ? <PriceMtoL2 category="Weapon" /> :  (store.category === "LtoM") ? <PriceLtoM category="Weapon"/>: <Toolslist category="Weapon" />}</div>
      </div>
    </div>
  )
}

