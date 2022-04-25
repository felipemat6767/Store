import React from 'react'
import { ElementCard } from '../components/Card'
import { getElementbytype } from '../selectors/getElementbytype'


export const Armorfilt = ({ type }) => {
    const Armor = getElementbytype(type)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{Armor.length}</span> items available</span>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Armor.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
