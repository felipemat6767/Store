import React from 'react'
import { ElementCard } from '../components/Card'
import { getElementbytype } from '../selectors/getElementbytype'


export const Weaponsfilt = ({ type }) => {
    const Weapons = getElementbytype(type)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Weapons.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
