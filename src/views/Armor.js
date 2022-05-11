import React, { useContext } from 'react'
import { Armorfilt } from '../tools/Armorfilt'
import {  TiersEnhanced, TiersBase } from '../tools/tierfilt'
import { Toolslist } from '../tools/toolslist'
import { Context } from '../store/appContext'
import { Filtercopy } from '../components/Filter copy'
import { PriceLtoM, PriceMtoL2 } from '../tools/Pricefilt'


export const Armor = () => {
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
        <div className='col-10'>{(store.category === "Ursine") ? <Armorfilt type="Ursine-Armor" /> : (store.category === "Feline") ? <Armorfilt type="Feline-Armor" /> : (store.category === "Enhanced") ? <TiersEnhanced category="Armor" /> : (store.category === "Base") ? <TiersBase category ="Armor" /> : (store.category === "MtoL") ? <PriceMtoL2 category="Armor" /> :  (store.category === "LtoM") ? <PriceLtoM category="Armor"/> : <Toolslist category="Armor" />}</div>
      </div>
    </div>
  )
}
