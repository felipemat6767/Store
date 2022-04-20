import React from 'react'
import { Weapons_Armor } from '../data/WeaponArmor'

export const getelementbyTier = (tier) => {

  const validtype = ["Enhanced", "Base"]

  if (!validtype.includes(tier)) {
    throw new Error(`${tier} is not a valid tier`)
  }
  return Weapons_Armor.filter(element =>
    element.tier === tier
  )

}