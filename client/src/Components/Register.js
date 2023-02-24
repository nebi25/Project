import React, {useState} from 'react';
import axios from 'axios';

const Register = (props) => {
    const {register,setRegister} = props;
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const onChangeHandler = (e) =>{
        setRegisterData({
            ...registerData,[e.target.name]:e.target.value
        });
    }

    function onSubmitHandler(e){
        e.preventDefault();

        axios.post("http://localhost:8000/api/register",{...registerData},{withCredentials: true})
        .then((res) => {
            console.log(res);
            setRegister(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            {/* Login */}
            <div className="login" id={
                (register)
                ? "show-register"
                : "close-register"
            }>
                <i className="bx bx-x login-close" id="login-close" onClick={() => setRegister(false)}></i>

                <h2 className="login-title-center">Register.</h2>

                <form className="login-form grid" onSubmit={onSubmitHandler}>
                    <div className="login-content">
                        <label className="login-label">Username:</label>
                        <input type="text" className="login-input" name="username" onChange={onChangeHandler}/>
                    </div>

                    <div className="login-content">
                        <label className="login-label">Email:</label>
                        <input type="email" className="login-input" name="email" onChange={onChangeHandler}/>
                    </div>
                    <div className="login-content">
                        <label className="login-label">Password:</label>
                        <input type="password" className="login-input" name="password" onChange={onChangeHandler}/>
                    </div>
                    <div className="login-content">
                        <label className="login-label">Confirm Password:</label>
                        <input type="password" className="login-input" name="confirmPassword" onChange={onChangeHandler}/>
                    </div>

                    <button type="submit" className="button">Sign Up.</button>
                </form>
            </div> 
        </div>
    )
}

export default Register