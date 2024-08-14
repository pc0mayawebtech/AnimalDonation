import './Login.css';
import loginlogo from '../../assets/Images/loginlogo.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [inputval, setInputVal] = useState({
        email: "",
        password: "",
        error: {
            email: "",
            password: "",
        }
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputVal((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        });
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const notify = () => toast.success('Login is successfull', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        const errorNotify = () => toast.error('something is wrong', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        e.preventDefault();
        const { email, password } = inputval;
        const errors = {
            email: "",
            password: "",
        };

        let hasErrors = true;

        if (email === "") {
            errors.email = "Email is required";
            hasErrors = false;
        }
        else if (!email.includes('@')) {
            errors.email = "Invalid email";
            hasErrors = false;
        }

        if (password === "") {
            errors.password = "Password is required";
            hasErrors = false;
        }
        else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
            hasErrors = false;
        }

        if (hasErrors) {
            try {
                const response = await axios.post('http://localhost:8000/login', {
                    email: inputval.email,
                    password: inputval.password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                console.log('logindata', response.data[0].token);
                notify();
                navigate('/dashboard', { replace: true });
                localStorage.setItem('token', response.data[0].token);
            } catch (error) {
                console.log("error in login", error);
                errorNotify();
                setInputVal({
                    email: "",
                    password: "",
                    error: {
                        email: "",
                        password: "",
                    },
                });
            }

        } else {
            setInputVal((preValue) => {
                return {
                    ...preValue,
                    error: errors,
                }
            });
        }
    }
    return (
        <>
            <section className='login'>
                <div className="container">
                    <div className="outerWrapper">
                        <div className="row">
                            <div className="col-lg-6">
                                <label>
                                    <img src={loginlogo} alt="loginlogo" loading='lazy' className='logo' />
                                </label>
                            </div>
                            <div className="col-lg-6">
                                <form action="./action.php" method='post' className='formOuterWrapper' onSubmit={handleSubmit}>
                                    <div>
                                        <h1 className='formTitle'>Welcome to the team!</h1>
                                    </div>
                                    <div className="formWrapper">
                                        <label className='labelControl'>Email</label>
                                        <input type="email" name="email" value={inputval.email} onChange={handleChange} id="email" placeholder='Enter Email' className='formControl' />
                                        <span style={{ fontSize: "1rem", color: "red", marginBottom: "0.9rem", display: "block" }}>{inputval.error.email}</span>
                                    </div>
                                    <div className="formWrapper">
                                        <label className='labelControl'>Password</label>
                                        <input type="password" name="password" value={inputval.password} onChange={handleChange} id="password" placeholder='Enter Password' className='formControl' />
                                        <span style={{ fontSize: "1rem", color: "red", marginBottom: "0.9rem", display: "block" }}>{inputval.error.password}</span>
                                    </div>
                                    <p className='forgetpass'><Link to="/forgot-password" className='forgetpass'>Forget your password?</Link></p>
                                    <div>
                                        <button type='submit' className='btnSubmit'>Submit</button>
                                    </div>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;