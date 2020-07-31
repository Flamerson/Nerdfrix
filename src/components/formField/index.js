import React from 'react';

function FormField({ label , type , name , value , onchange}) {
    return(
        <div>
            <label>
                {label}:
                <input 
                  type={type}
                  value={value}
                  name={name}
                  onChange={onchange}
                />
            </label>
        </div>
    )
}


export default FormField;