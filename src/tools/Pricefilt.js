import { GetPriceLtoM, GetPriceMtoL} from "../selectors/getPrice"

export const PriceLtoM = () => {
    const LtoM = GetPriceLtoM
    console.log(LtoM)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{LtoM.length}</span> items available</span>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {LtoM}
            </div>
        </>
    )
}

export const PriceMtoL = () => {
    const MtoL = GetPriceMtoL
    console.log(MtoL)
    return (
        <>
         <span className='text-items'>There are <span className='text-length'>{MtoL.length}</span> items available</span>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>
                {MtoL}
            </div>
        </>
    )
}