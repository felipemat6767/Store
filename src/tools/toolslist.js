import React from 'react'
import { ElementCard } from '../components/Card'
import { getelementbyCategory } from '../selectors/getelementbyCategory'
import { getElementbytype } from '../selectors/getElementbytype'


export const Toolslist = ({ category }) => {
    const tools = getelementbyCategory(category)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {tools.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
