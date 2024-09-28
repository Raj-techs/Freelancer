import React, { useState } from 'react'
import Login from '../pages/Login'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SignUpComp = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword:"",
        whatsappNo:"",
        mobile:"",
        year:"",
        qr:""
      });
      const {username,email,password,confirmpassword,whatsappNo,mobile,year,qr}=formData;
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
          const response = await axios.post('http://localhost:3000/users', formData);
          console.log('User registered:', response.data);
          alert("Successfully Registered")
            navigate('/login')
          
        } catch (error) {
          console.error('Error registering user:', error);
          alert("Registeration Failed")
        }
      };

    return (
        <>
            <form onSubmit={handleSubmit} className="signup">
                <h1>Sign Up</h1>
                <p><Link to='/login'>Have an account (Login)</Link></p>

                <div>
                    <p>Username*</p>
                    <input type="text" name='username' onChange={handleChange} value={username} />
                </div>
                <div>
                    <p>E-mail*</p>
                    <input type="text" name='email' onChange={handleChange} value={email} />
                </div>
                <div>
                    <p>Password*</p>
                    <input type="text"  name='password' onChange={handleChange} value={password}/>
                </div>
                <div>
                    <p>Confirm Password*</p>
                    <input type="text" name='confirmpassword' onChange={handleChange} value={confirmpassword}/>
                </div>

                <div style={{display:"flex"}}>

                    <div>
                        <p>
                            WhatsApp Number*
                        </p>
                        <input type="text" name='whatsappNo' onChange={handleChange} value={whatsappNo}/>
                    </div>

                    <div>
                        <p>
                            Mobile Number*
                        </p>
                        <input type="text" name='mobile' onChange={handleChange} value={mobile}/>
                    </div>

                    <div>
                        <p>
                            Year (Academic)*
                        </p>
                        <input type="text" name='year' onChange={handleChange} value={year}/>
                    </div>

                    <div>
                        <p>
                             PhonePay QR
                        </p>
                        <input type="file" name='qr' onChange={handleChange} value={qr}/>
                    </div>


                </div>
                <div>
                    <button>Illustration</button><button>Branding</button>
                </div>

                <div>
                    <button className='createA'>Create Account</button>
                </div>
            </form>
        </>
    )
}

export default SignUpComp
