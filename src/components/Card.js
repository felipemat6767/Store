import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { Context } from '../store/appContext'



export const ElementCard = ({ id, weight, Components, type, name, price }) => {
    const imagepath = `../images/${id}.jpg`
    const { actions } = useContext(Context)
 
    const getInitialState = () => {
        let value = "0";
        return value;
        
    };
    const [itemquantity, setQuantity] = useState(getInitialState)
  
    const handleChange = (e) => {
        setQuantity(e.target.value); 
    };
   

    const totalprice = itemquantity * price
    const add = () => {
        itemquantity >= 1 ? actions.additems(name, totalprice, imagepath, itemquantity): alert("Debe seleccionar minimo un item")
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
                            <select class="form-select w-75 mx-auto mt-3 text-center" aria-label="Default select example"  onChange={handleChange}>
                                <option selected>-- N° Items --</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <div className='d-flex justify-content-around my-3'>
                                <Link to={`/info/${name}`} className="btn">More Info</Link>
                                <br></br>
                                <div className="btn " 
                                onClick={add}><i class="fas fa-plus"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

