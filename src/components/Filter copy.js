import React, { useContext} from 'react'
import { Context } from '../store/appContext'

export const Filtercopy = () => {  
    const { actions} = useContext(Context)
    return (
        <div className='d-flex flex-column'>
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
            <div className='mt-2'>
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
            <div className='mt-2'>
                <h5>Price</h5>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"  onClick={() => { actions.changecategory("MtoL")}} />
                    <label className="form-check-label" for="flexRadioDefault">
                        Most expensive to Least expensive
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => { actions.changecategory("LtoM")}} />
                    <label className="form-check-label" for="flexRadioDefault">
                        Least expensive to Most expensive
                    </label>
                </div>
            </div>


        </div>
    )
}
