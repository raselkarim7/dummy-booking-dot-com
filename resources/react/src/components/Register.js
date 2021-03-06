import React, { useState, } from 'react';
import * as authService from "../service/auth_service";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')

    const  handleSubmit = async (event) => {
        event.preventDefault()
        if (password !== "" && password_confirmation !== password) {
            alert('password not matched')
            return;
        }
        const user = {name, email, password, password_confirmation}
        console.log('Register.js, user === ', user)
        try {
            const response = await authService.register(user);
            console.log('register response = ', response)
            try {
                const response = await authService.login(user);
                fethUserNow()
                console.log('login response = ', response)

            } catch (error) {
                
            }
            fethUserNow()

        } catch (error) {
            
        }

        console.log('register event === ', event, user)
    }

    const fethUserNow = async () => {
        try {
          const response = await authService.getUser();
          console.log("user --------> ", response.data);

        } catch (error) {
          // console.log("wwwwwwww ----------> ", error, error.response);
        }
    }

    return (
        <div > 
            <h1> Register Page </h1>
            <form className="register-form" onSubmit={handleSubmit}>

                <label >
                    <span>Name: </span>
                    <input id="name" name="name" type="text" required onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Email: </span>
                    <input id="email" name="email" type="email" required onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br />

                <label >
                    <span>Password: </span>
                    <input id="password" name="password" type="password" required onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br /> 

                <label >
                    <span>Confirm Password: </span>
                    <input id="password_confirmation" name="password_confirmation" type="password_confirmation" required onChange={(event) => setPassword_confirmation(event.target.value)} />
                </label>
                <br />
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    )
}

export default Register