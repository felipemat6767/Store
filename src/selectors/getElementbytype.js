import React from 'react'
import { ElementCard } from '../components/Card'
import { Weapons_Armor } from '../data/WeaponArmor'

const datacopia = [...Weapons_Armor]
const validtype = ["Ursine-Armor", "Feline-Armor", "Ursine-Weapon", "Feline-Weapon"]
export const getElementbytype = (type) => {

  if (validtype.includes(type)) {
    return Weapons_Armor.filter(element =>
      element.type === type
    )
  }
  else{
    throw new Error(`${type} is not a valid type`)
  }

}


