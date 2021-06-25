import React,{useContext,useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"

const RegisterDesicionPage = () => {
    return (
        <div>
            <h1>Registro</h1>
            <h4>¿Cómo quires colaborar con u-choose?</h4>
                     <form>
             <input type="radio" value="male" id="male"
               onChange={handleChange} name="gender" />
             <label for="male">Male</label>

            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label for="female">Female</label>
         </form>

         <p>You gender is --> {gender}</p>

        </div>
    )
}

export default RegisterDesicionPage
