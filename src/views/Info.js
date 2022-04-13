import React from 'react'
import {useParams } from "react-router-dom";
import { getElementbyName} from '../selectors/getElementbyName';

export const Info = () => {
    const {Hello} = useParams()
    const Element = getElementbyName(Hello)
    const { Components, price, weight, tier, name, id } = Element
    const imagepath = `../images/${id}.jpg`
    return (
        <div className="card card-info" >
            <img src={imagepath} className="card-img-top img-info" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{Components}</p>
                    <p className="card-text">{weight}</p>
                    <p className="card-text">{tier}</p>
                    <p className="card-text">{price}</p>
                </div>
        </div>
    )
}
