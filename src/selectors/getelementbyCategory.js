import React from 'react'
import { ElementCard } from '../components/Card'
import { Weapons_Armor } from '../data/WeaponArmor'

const validtype = ["Weapon", "Armor"]

export const getelementbyCategory = (category) => {
  if (!validtype.includes(category)) {
    throw new Error(`${category} is not a valid type`)
  }
  return Weapons_Armor.filter(element =>
    element.Category === category
  )
}

export const getElementbypriceMtoL = (filteredarray) => {
  return filteredarray.sort((a, b) => a.price < b.price ? 1 : a.price > b.price ? -1 : 0).map((item, i) => <ElementCard key={item.name} {...item} />)

}

export const getElementbypriceLtoM = (filteredarray) => {
    return filteredarray.sort((a, b) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0).map((item, i) => <ElementCard key={item.name} {...item} />)

}