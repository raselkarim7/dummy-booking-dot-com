import React, { useState } from 'react';
import * as authService from "../service/auth_service";


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember_me, setRememberMe] = useState( false )

    const  handleSubmit = async (event) => {
        event.preventDefault()
        const user = {email, password, remember_me}
        try {
            const response = await authService.login(user);
            console.log('login response = ', response)
            fethUserNow()

        } catch (error) {
            
        }

        console.log('login event === ', event, user)
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
            <h1 className="text-center p-5 m-5" > Login </h1>
        
            <form className="simple-basic-form" onSubmit={handleSubmit}>
                
                <label >
                    <span>Email: </span>
                    <input id="email" name="email" type="email" onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br />
                <label >
                    <span>Password: </span>
                    <input id="password" name="password" type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />

                <label>
                    <span>Remember Me </span>
                    <input id="remember_me" name="remember_me" type="checkbox" onChange={(event) => setRememberMe(event.target.checked)} />
                </label>
                <br />
                <input type="submit" value="Login" />

                
            </form>
        </div>
    )
}

export default Login