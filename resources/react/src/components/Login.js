import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  handleSubmit = (event) => {
        event.preventDefault()
        console.log('login event === ', event)
    }

    return (
        <div> 
            <h1> Login Page </h1>
            <form className="login-form" onSubmit={handleSubmit}>
                
                <label >
                    <span>Email: </span>
                    <input id="email" name="email" type="email" />
                </label>
                <br />
                <label >
                <   span>Password: </span>
                    <input id="password" name="password" type="password" />
                </label>
                <br />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default Login