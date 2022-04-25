import React from 'react'
import { Monsters } from '../data/Monsters'


export const getMonsterbyName = (Name) => {

  return Monsters.filter(element =>
    element.name === Name
  )

}