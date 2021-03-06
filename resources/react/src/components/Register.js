import React, { useState, } from 'react';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  handleSubmit = (event) => {
        event.preventDefault()
        console.log('register event === ', event)

    }

    return (
        <div > 
            <h1> Register Page </h1>
            <form className="register-form" onSubmit={handleSubmit}>

                <label >
                    <span>Name: </span>
                    <input id="name" name="name" type="text" />
                </label>
                <br />
                <label >
                    <span>Email: </span>
                    <input id="email" name="email" type="email" />
                </label>
                <br />

                <label >
                    <span>Password: </span>
                    <input id="password" name="password" type="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default Register