import { ElementCard } from '../components/Card'
import { getelementbyTier } from '../selectors/getElementbyTier'
import { getElementbytype } from '../selectors/getElementbytype'


export const Tierfilt = ({ tier }) => {
    const Tier = getelementbyTier(tier)
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {Tier.map(item => (
                    < ElementCard key={item.id}
                        {...item} />
                ))}
            </div>
        </>
    )
}
