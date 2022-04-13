import React from 'react'
import { Weapons_Armor } from '../data/WeaponArmor'

export const getElementbytype = (type) => {
  const validtype = ["Ursine", "Feline"]
  if (validtype.includes(type)) {
    return Weapons_Armor.filter(element =>
      element.type === type
    )
  }
  else{
    throw new Error(`${type} is not a valid type`)
  }

}
