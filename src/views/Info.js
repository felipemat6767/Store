import React from 'react'
import {useParams } from "react-router-dom";
import { getElementbyName} from '../selectors/getElementbyName';

export const Info = () => {
    const {Hello} = useParams()
    const Element = getElementbyName(Hello)
    const { Components, price, weight, tier, name, id } = Element
    const imagepath = `../images/${id}.jpg`
    return (
        <div className="card card-info mx-auto mt-3 h-75" >
            <img src={imagepath} className="card-img-top img-info" alt="..." />
                <div className="">
                    <h5 className="card-title"><span className='text-desc'>Nombre: </span>{name}</h5>
                    <p className="card-text "><span className='text-desc'>Components: </span>{Components}</p>
                    <p className="card-text"><span className='text-desc'>Weight: </span>{weight}</p>
                    <p className="card-text"><span className='text-desc'>Tier: </span>{tier}</p>
                    <p className="card-text"><span className='text-desc'>Price: </span>{price}</p>
                </div>
        </div>
    )
}
