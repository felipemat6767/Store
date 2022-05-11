import { ElementCard } from '../components/Card'
import { getelementbyCategory } from '../selectors/getelementbyCategory'
import { getElementbyBaseTier, getElementbyEnhancedTier, getelementbyTier } from '../selectors/getElementbyTier'



export const Tierfilt = ({ tier }) => {
    const Tier = getelementbyTier(tier)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{Tier.length}</span> items available</span>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Tier.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}

export const TiersEnhanced = ({category}) => {
    const categories = getelementbyCategory(category)
    //const MtoL = getElementbypriceMtoL( tools)
    //const tier = getelementbyTier(categories)
    const tiersfilt = getElementbyEnhancedTier(categories)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{tiersfilt.length}</span> items available</span>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
               {tiersfilt}
            </div>
        </>
    )
}

export const TiersBase = ({category}) => {
    const categories = getelementbyCategory(category)
    const tiersfilt = getElementbyBaseTier(categories)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{tiersfilt.length}</span> items available</span>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
               {tiersfilt}
            </div>
        </>
    )
}
