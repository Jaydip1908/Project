// import React, { useState } from 'react'
// import '../pages/login.css'

// function LoginSignup() {

//   const [state, setState] = useState("Login");

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: ""
//   })

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   }

//   const login = async () => {
//     // console.log('Login Done', formData)
//     let responseData;
//     await fetch('http://localhost:8000/api/users/login', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/form-data',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     }).then((response) => response.json()).then((data) => responseData = data);

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       window.location.replace("/");
//     }
//     else {
//       alert(responseData.error)
//       console.log(responseData)
//     }
//   }

//   const signup = async () => {
//     // console.log('Sign Up', formData);
//     let responseData;
//     await fetch('http://localhost:8000/api/users', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/form-data',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     }).then((response) => response.json()).then((data) => responseData = data);

//     if (responseData.success) {
//       localStorage.setItem('auth-token', responseData.token);
//       window.location.replace("/");
//     }
//     else {
//       alert(responseData.error)
//       console.log(responseData)
//     }
//   }

//   return (
//     <div className='loginsignup' >
//       <div className="loginsignup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fields">
//           {state === "Sign Up" ? <input name='username' value={formData.username} onChange={handleChange} type="text" placeholder='Your Name' /> : <></>}
//           <input name='email' value={formData.email} onChange={handleChange} type="email" placeholder='Your Email' />
//           <input name='password' value={formData.password} onChange={handleChange} type="password" placeholder='Passsword' />
//         </div>
//         <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>

//         {state === "Sign Up"
//           ? <p className='loginsignup-login'>Alrady have an account ? <span onClick={() => { setState("Login") }} style={{ cursor: 'pointer' }}>Login here</span></p>
//           : <p className='loginsignup-login'>Create An Account? <span onClick={() => { setState("Sign Up") }} style={{ cursor: 'pointer' }}>Click hear</span></p>}

//         <div className="loginsignup-agree">
//           <input type="checkbox" name='' id='' />
//           <p>By Continuing, i agree to the terms of use & privecy policy.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup
import React, { useState } from 'react';
import '../pages/login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const LoginSignup = ({ setShowLogin }) => {
    const navigate = useNavigate();

    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let url;
        if (currState === "Login") {
            url = "http://localhost:8000/api/users/login";
            navigate('/');
        } else {
            url = "http://localhost:8000/api/users";
        }

        try {
            const response = await axios.post(url, data);
            console.log(response);

            if (response.data.success) {
                localStorage.setItem("token", response.data.token);

             
                if (currState === "Sing up") {
                    setCurrState("Login"); 
                }
            } else {
                alert(response.data.message); 
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Check E-mail and password");
        }
    };

    return (
        <div className="loginsignup">
            <form onSubmit={onLogin} className="loginsignup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} alt="" />
                </div>
                <div className="loginsignup-fields">
                    {currState === "Login" ? (
                        <></>
                    ) : (
                        <input
                            name="name"
                            onChange={onChangeHandler}
                            value={data.name}
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    )}
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder="Your email"
                        required
                    />
                    <input
                        name="password"
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">
                    {currState === "Sing up" ? "Create account" : "Login"}
                </button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms & privacy policy</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account?{" "}
                        <span onClick={() => setCurrState("Sing up")}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setCurrState("Login")}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginSignup;