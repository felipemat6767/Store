import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../store/appContext'



export const ElementCard = ({ id, weight, Components, type, name, price }) => {
    const imagepath = `../images/${id}.jpg`
    const { actions } = useContext(Context)

    const add = () => {
        actions.additems(name, price, imagepath)
    }
    return (
        <div className="col col-sm-6 col-md-4">
            <div className="card m-1">
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={imagepath} className="card-img-top" alt={name} />
                    </div>
                    <div className='col-md-8 bg-inf h-100 text-center p-0'>
                        <div className='p-0 m-0'>
                            <h6 className="card-title p-1 bg-title">{name}</h6>
                            <p className="card-text bg-data w-100">Price: ${price}</p>
                            <p className="card-text bg-data">Weight: {weight}</p>
                            <p className="card-text bg-data">Type: {type}</p>
                            <div className='d-flex justify-content-around my-3'>
                                <Link to={`/info/${name}`} className="btn">More Info</Link>
                                <br></br>
                                <div className="btn " onClick={add}><i class="fas fa-plus"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

