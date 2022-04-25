import React, { useContext } from 'react'
import { Filter } from '../components/Filter'
import { Tierfilt } from '../tools/tierfilt'
import { Toolslist } from '../tools/toolslist'
import { Weaponsfilt } from '../tools/Weaponsfilt'
import { Context } from '../store/appContext'

export const Weapons = () => {
  const { store} = useContext(Context)
  return (
    <div className='d-flex row'>
      <Filter />
      <div className='col-10'>{(store.category === "Ursine") ? <Weaponsfilt type="Ursine-Weapon" /> : (store.category === "Feline") ? <Weaponsfilt type="Feline-Weapon" /> : (store.category === "Enhanced") ? <Tierfilt tier="Enhanced" /> : (store.category === "Base") ? <Tierfilt tier="Base" /> : <Toolslist category="Weapon" />}</div>
    </div>
  )
}

