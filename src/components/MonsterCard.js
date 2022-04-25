import React, { useContext } from 'react'

export const MonsterCard = ({ id, name, type, description, susceptibility }) => {
    const imagepath = `../imgmonster/${id}.jpg`
    return (
        <div className="col col-sm-6 col-md-12">
            <div className="card h-100">
                <div className='row'>
                    <div class="mb-3 col-sm-6 col-md-12">
                        <img src={imagepath}class="card-img-top monster-card" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <span>{type}</span> 
                                <p class="card-text">{description}.</p>
                                <p class="card-text">{susceptibility}.</p>
                                <p class="card-text"><small class="text-muted"></small></p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


