import React from 'react'
import { MonsterCard } from '../components/MonsterCard'
import { getelementbyCategory } from '../selectors/getelementbyCategory'
import { getMonster } from '../selectors/getMonster'


export const Monsterlist = ({ category }) => {
    const monster = getMonster(category)
    return (
        <>
            <h1>List - {category} </h1>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {monster.map(item => (
                    < MonsterCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}