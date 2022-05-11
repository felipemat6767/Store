
import { getelementbyCategory, getElementbypriceLtoM, getElementbypriceMtoL } from "../selectors/getelementbyCategory"


export const PriceMtoL2 = ({category}) => {
    const tools = getelementbyCategory(category)
    const MtoL = getElementbypriceMtoL( tools)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{MtoL.length}</span> items available</span>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {MtoL}
            </div>
        </>
    )
}

export const PriceLtoM = ({category}) => {
    const tools = getelementbyCategory(category)
    const LtoM = getElementbypriceLtoM( tools)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{LtoM.length}</span> items available</span>
         <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {LtoM}
            </div>
        </>
    )
}