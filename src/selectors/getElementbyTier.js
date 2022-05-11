import React from 'react'
import { ElementCard } from '../components/Card'
import { Weapons_Armor } from '../data/WeaponArmor'

const validtype = ["Enhanced", "Base"]

export const getelementbyTier = (tier) => {

  if (!validtype.includes(tier)) {
    throw new Error(`${tier} is not a valid tier`)
  }
  return Weapons_Armor.filter(element =>
    element.tier === tier
  )

}

export const getElementbyEnhancedTier = (filteredarray) => {
  return filteredarray.filter((item) => item.tier === "Enhanced").map((item, i) => <ElementCard key={item.name} {...item} />)
}

export const getElementbyBaseTier = (filteredarray) => {
  return filteredarray.filter((item) => item.tier === "Base").map((item, i) => <ElementCard key={item.name} {...item} />)
}

