import React from 'react'
import { MonsterCard } from '../components/MonsterCard'
import { getMonsterbyName } from '../selectors/getMonsterbyName'



export const MonsterSearch = ({ name }) => {
    const monster = getMonsterbyName(name)
    return (
        <div className='my-4'>
            <h1>{name} </h1>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {monster.map(item => (
                    < MonsterCard key={item.id}
                        {...item} />
                ))}
            </div>
        </div>
    )
}