import React, { useEffect, useState } from 'react'
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(()=>{
        // console.log("siiu")
    }, []);

    useEffect(()=>{
        // console.log("siiu cambio formState")
    }, [formState]);
    useEffect(()=>{
        // console.log("siiu cambio email")
    }, [email]);

    const handleInputChange = ({target}) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

  return (
    <>
        <h2>UseEffect</h2>
        <hr/>

        <div className='form-group'>
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>

        <div className='form-group'>
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="Your email"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
        </div>

        { (name === '1') && <Message /> }
    </>
  )
}
