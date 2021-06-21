import React from 'react';


const Form=({ onChangeInput})=>{


    return(
          <form >
              <input  type="text" onChange={onChangeInput}
              placeholder="Search for a dish"/>
          </form>

)
}

export default Form;
