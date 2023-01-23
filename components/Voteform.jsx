import React from 'react'
import styles from '../components/Voteformstyles.module.css'
import { useState } from 'react'


export default function Voteform() {
 
    
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    
   

    const handleSubmit = (event) =>{
        event.preventDefault();

        const data = {
            Name,
            Email
        
        }
        console.log(data)
        }
    
  return (
    <form>
            <label>Name</label>
            <input type="text" onChange={({target}) => setName(target?.value)}/>
            <label>Addu email</label>
            <input type="text" onChange={({target}) => setEmail(target?.value)} />
            <input type="radio" name="" id="" /> Yes
            <input type="radio" name="" id="" /> No
            <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
  );
}

