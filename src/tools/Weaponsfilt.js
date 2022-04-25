import React from 'react'
import { ElementCard } from '../components/Card'
import { getElementbytype } from '../selectors/getElementbytype'


export const Weaponsfilt = ({ type }) => {
    const Weapons = getElementbytype(type)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{Weapons.length}</span> items available</span>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Weapons.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
