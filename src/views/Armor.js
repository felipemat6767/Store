import React, { useContext } from 'react'
import { Filter } from '../components/Filter'
import { Armorfilt } from '../tools/Armorfilt'
import { Tierfilt } from '../tools/tierfilt'
import { Toolslist } from '../tools/toolslist'
import { Context } from '../store/appContext'
export const Armor = () => {
  const { store} = useContext(Context)

  return (
    <div>
     
      <div className='d-flex row'>
        <Filter />
        <div className='col-10'>{(store.category === "Ursine") ? <Armorfilt type="Ursine-Armor" /> : (store.category === "Feline") ? <Armorfilt type="Feline-Armor" /> : (store.category === "Enhanced") ? <Tierfilt tier="Enhanced"/> : (store.category === "Base") ? <Tierfilt tier="Base" /> : <Toolslist category="Armor" />}</div>


      </div>
    </div>
  )
}
