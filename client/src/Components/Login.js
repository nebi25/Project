import React, {useState,useEffect} from 'react';
import Register from './Register';
import axios from 'axios';


const Login = (props) => {
    const {login,setLogin} = props;
    const [register,setRegister] = useState(false);
    const [loginData,setLoginData] = useState({
        email: "",
        password: ""
    });
    const {userData,setUserData} = props;

    const onChangeHandler = (e) => {
        setLoginData({
            ...loginData,[e.target.name]:e.target.value
        })
    }

    function onSubmitHandler(e){
        e.preventDefault();

        axios.post("http://localhost:8000/api/login",{...loginData},{withCredentials: true})
        .then((res) => {
            console.log(res.data.user)
            setUserData(res.data.use)
            setLogin(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            {/* Login */}
            <div className="login" id={
                (!login)
                ? "close-login"
                : ""
            }>
                <i className="bx bx-x login-close" id="login-close" onClick={() => setLogin(false)}></i>

                <h2 className="login-title-center">Login.</h2>

                <form className="login-form grid" onSubmit={onSubmitHandler}>
                    <div className="login-content">
                        <label className="login-label">Email:</label>
                        <input type="email" className="login-input" name="email" onChange={onChangeHandler}/>
                    </div>

                    <div className="login-content">
                        <label className="login-label">Password:</label>
                        <input type="password" className="login-input" name="password" onChange={onChangeHandler}/>
                    </div>

                    <button type="submit" className="button">Sign In.</button>

                    <div>
                        <p className="signup">Not a Member? <a href="#" onClick={() => {
                            setRegister(true)
                        }}>Sign up now!</a></p>
                    </div>
                </form>
            </div> 
            <Register register={register} setRegister={setRegister}/>
        </div>
    )
}

export default Login