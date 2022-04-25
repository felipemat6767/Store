import React, { useContext } from 'react'
import "../index.css"

export const Intro = () => {
  return (
    <div>
      <div className='img-intro'>
        
      </div>
      <h3 className='title-schools mb-0'>There are Four Great Schools</h3>
      <section id="equipo" className='mt-0'>
        <div className="persona">
          <img src="../images/SchoolBear.jpg" className="persona-imagen" alt="" />
          <div className="persona-info">
            <h2>Bear School</h2>
            <p>Headquartered in Haern Caduch keep in Amell</p>
          </div>
        </div>

        <div className="persona">
          <img src="../images/SchoolWolf.jpg" className="persona-imagen" alt="" />
          <div className="persona-info">
            <h2>Witcher School</h2>
            <p>Headquartered at Kaer Morhen in Kaedwen</p>
          </div>
        </div>

        <div className="persona">
          <img src="../images/SchoolGriffin.jpg" className="persona-imagen" alt="" />
          <div className="persona-info">
            <h2>Griffin School</h2>
            <p>Headquartered in Kovir and Poviss, in Kaer Seren.</p>
          </div>
        </div>

        <div className="persona">
          <img src="../images/SchoolCat.jpg" className="persona-imagen" alt="" />
          <div className="persona-info">
            <h2>Cat School</h2>
            <p className='p-1'> They originally based themself out of the Stygga Citadel, but due to mysterious reasons by the time of Gezras turned into a mobile caravan called Dyn Marv 'Dead Man</p>
          </div>
        </div>
      </section>
      <section id="ingredientes">
        <div className="ingre">
          <img src="../images/BearMedal.jpg" alt="" class="imagen-ingre" />
          <div className="info-ingre">
            <span className="fas fa-dragon"></span>
            <p className="text-ingre">Founder: Arnaghad</p>
          </div>
        </div>

        <div className="ingre">
          <img src="../images/WolfMedal.jpg" alt="" className="imagen-ingre" />
          <div className="info-ingre">
            <span class="fas fa-bullseye"></span>
            <p className="text-ingre">Founder: Deglan</p>
          </div>
        </div>

        <div className="ingre">
          <img src="../images/GriffinMedal.jpg" alt="" className="imagen-ingre" />
          <div className="info-ingre">
            <span className="fas fa-bell"></span>
            <p className="text-ingre">Founder: Erland</p>
          </div>
        </div>

        <div className="ingre">
          <img src="../images/CatMedal.jpg" alt="" className="imagen-ingre" />
          <div className="info-ingre">
            <span className="fas fa-book"></span>
            <p className="text-ingre">Founder: Gezras</p>
          </div>
        </div>
      </section>
    </div>

  )
}
