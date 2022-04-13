import React from 'react'
import { Monsters } from '../data/Monsters'

export const getMonster = (Monster) => {
    return Monsters.filter(item => {
        return item.type === Monster
    })
}
