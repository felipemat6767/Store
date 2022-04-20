import React from 'react'
import { ElementCard } from '../components/Card'
import { getElementbytype } from '../selectors/getElementbytype'


export const Armorfilt = ({ type }) => {
    const Armor = getElementbytype(type)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Armor.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
