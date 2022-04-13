import React from 'react'
import { Weapons_Armor } from '../data/WeaponArmor'

export const getElementbyName = (name) => {
  return (
    Weapons_Armor.find(item => item.name === name)
  )
}


