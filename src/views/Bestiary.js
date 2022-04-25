import React, { useState } from 'react'
import { getMonsterbyName } from '../selectors/getMonsterbyName'
import { Monsterlist } from '../tools/monsterlist'
import { MonsterSearch } from '../tools/MonsterSearch'


export const Bestiary = () => {

  const [MonsterName, setName] = useState("")
  const [clickvalue, setclick] = useState("")
  const addName = (e) => {
    setName(e.target.value)
  }

  const addClick = () => {
    setclick(MonsterName)
  }
  const removeClick = () => {
    setclick("")
  }
  return (
    <div>
      <div className="input-group my-3">
        <input type="text" class="form-control" aria-label="" onInput={addName} placeholder="Search for Monster Here ..."></input>
        <button class="input-group-text"><i className="fas fa-search" onClick={addClick}></i></button>
        <button class="input-group-text"><i className="fas fa-minus" onClick={removeClick}></i></button>
      </div>
      <div>
        <MonsterSearch name={clickvalue} />
      </div>


      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Beasts
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <Monsterlist category="Beasts" />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Cursed Ones
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <Monsterlist category="Cursed Ones" />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Draconids
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <Monsterlist category="Draconids" />
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Vampires
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <Monsterlist category="Vampires" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
