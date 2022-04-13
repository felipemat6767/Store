import React from 'react'
import { Weapons_Armor } from '../data/WeaponArmor'

export const getelementbyCategory = (category) => {

  const validtype = ["Weapon", "Armor"]

  if (!validtype.includes(category)) {
    throw new Error(`${category} is not a valid type`)
  }
  return Weapons_Armor.filter(element =>
    element.Category === category
  )

}
