import React, { useContext} from 'react'
import { Context } from '../store/appContext'

export const Filter = () => {  
    const { store, actions} = useContext(Context)
    console.log(store.category)
    return (
        <div className='col-2 d-flex flex-column align-items-center bg-filt p-0'>
            <h3 className='bg-data text-center'>Filter By</h3>
            <div className='mt-2'>
                <h5>Type Of</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={() => { actions.changecategory("Ursine")}}/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        Ursine
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { actions.changecategory("Feline")}}/>
                    <label className="form-check-label" for="flexRadioDefault">
                        Feline
                    </label>
                </div>
            </div>
            <div className='mt-3'>
                <h5>Tier Of</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { actions.changecategory("Enhanced")}} />
                    <label className="form-check-label" for="flexRadioDefault">
                        Enhanced
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => { actions.changecategory("Base")}}/>
                    <label className="form-check-label" for="flexRadioDefault">
                        Base
                    </label>
                </div>
            </div>


        </div>
    )
}
