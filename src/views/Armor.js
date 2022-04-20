import React, { useState } from 'react'
import { getelementbyCategory } from '../selectors/getelementbyCategory'
import { Armorfilt } from '../tools/Armorfilt'
import { Tierfilt } from '../tools/tierfilt'
import { Toolslist } from '../tools/toolslist'

export const Armor = () => {
  const [first, setfirst] = useState()
 
  return (
    <div>
      <h3>Filter By</h3>
      <div className='d-flex row'>
        <div className='col-2'>
          <div className=''>
            <h4>Type Of Armor</h4>
            <div className="form-check">
              <input classNameName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setfirst("Ursine") }} />
              <label className="form-check-label" for="flexRadioDefault1">
                Ursine
              </label>
            </div>
            <div className="form-check">
              <input classNameName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setfirst("Feline") }} />
              <label className="form-check-label" for="flexRadioDefault1">
                Feline
              </label>
            </div>
          </div>

          <div className='mt-3'>
            <h4>Tier Of Armor</h4>
            <div className="form-check">
              <input classNameName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setfirst("Enhanced") }} />
              <label className="form-check-label" for="flexRadioDefault1">
                Enhanced
              </label>
            </div>
            <div className="form-check">
              <input classNameName="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setfirst("Base") }} />
              <label className="form-check-label" for="flexRadioDefault1">
                Base
              </label>
            </div>
          </div>

        </div>

        <div className='col-10'>{(first === "Ursine") ? <Armorfilt type="Ursine-Armor" /> : (first === "Feline") ? <Armorfilt type="Feline-Armor" /> : (first==="Enhanced") ? <Tierfilt tier ="Enhanced" /> :  (first==="Base") ? <Tierfilt tier ="Base" /> :<Toolslist category="Armor" />}</div>


      </div>
    </div>
  )
}
