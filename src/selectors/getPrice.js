import React from 'react'
import { ElementCard } from '../components/Card'
import { Weapons_Armor } from '../data/WeaponArmor'

const datacopia = [...Weapons_Armor]

export const GetPriceMtoL = datacopia.sort((a, b) => a.price < b.price ? 1 : a.price > b.price ? -1 : 0).map((item, i) => <ElementCard key ={item.name} {...item} />)

export const GetPriceLtoM = datacopia.sort((a, b) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0).map((item, i) => <ElementCard key ={item.name} {...item} />)