import React from 'react'
import { getElementbytype } from '../selectors/getElementbytype'
import { Toolslist } from '../tools/toolslist'

export const Weapons = () => {
  return (
    <div>
      <h1>Weapons</h1>
      <Toolslist category = "Weapon" />
    </div>
  )
}

