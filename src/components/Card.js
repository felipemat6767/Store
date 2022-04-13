import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../store/appContext'



export const ElementCard = ({ id, Weight, Components, type, name, price }) => {
    const imagepath = `../images/${id}.jpg`
    const { actions } = useContext(Context)

    const add = () => {
        actions.sumItems(name, price)
        console.log(price)
    }
    return (
        <div className="col col-sm-6 col-md-4">
            <div className="card h-100">
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={imagepath} className="card-img-top" alt={name} />
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price}</p>
                            <p className="card-text">{Weight}</p>
                            <p className="card-text">{type}</p>
                            <Link to={`/info/${name}`} className="btn btn-primary">More Info</Link>
                            <br></br>
                            <div className="btn btn-primary mt-1" onClick={add}>Add</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

