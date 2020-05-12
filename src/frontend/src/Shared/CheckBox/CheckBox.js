import React from 'react'
import './CheckBox.css'

export const CheckBox = props => {
    return (
        <span>
            <input  key={props.id} onClick={props.handleCheckChieldElement} type="checkbox" className="checkbox-inline" checked={props.isChecked} value={props.value} />  {props.value} <span style={{float: "right", fontSize: "25px", color: "orange"}}>${props.price}</span>
            <div> <img style={{marginTop:"30px"}} src={props.image}/> <span style={{marginLeft: "30px"}}>{props.description}</span> </div>
            <hr/>
        </span>
    )
}

export default CheckBox