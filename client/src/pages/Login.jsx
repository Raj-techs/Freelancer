import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    
  const navigate = useNavigate()

  const [formData,setformData]=useState({
    email:"",
    password:""
  })

  const {email,password}= formData;
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/users');
      const user = response.data.find(
        user => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        localStorage.setItem('email', user.email);
        localStorage.setItem('username', user.username);
        navigate('/home');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <>
    
    <div className="signup-container">
                <div className="poster-1">
                    <h3>SUMMER</h3>
                    <div>
                        <h1 style={{fontSize:"3.5em"}}>Start your journey with us.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sint magnam aut facilis sed fugit non, alias expedita consequatur  ex ab ut numquam sit suscipit, laboriosam nam?</p>
                    </div>

                    <div className="card-1">
                       <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora inventore quae aliquid, similique rerum explicabo eos hic est? Fuga amet sunt magnam deleniti nam fugiat. Quasi ?</p> 
                        <div className='inner-card'>
                            <img src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg" style={{borderRadius:20}} width={40} alt="" />
                            <div>
                                <h4>Mani Deepak</h4>
                                <p>Freelancer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="signup">
                    <h1>Login </h1>
                    <p><Link to='/signup'>Create an account (Sign Up)</Link></p>

                    <div>
                        <p>Looking for ?</p>
                        <div>
                            <button>Project</button>
                            <button>Designs</button>
                        </div>
                    </div>

                    <div>
                        <p>E-mail</p>
                        <input type="text" name='email' onChange={handleChange} value={email} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="text"  name='password' onChange={handleChange} value={password}/>
                    </div>
                    
                    <div>
                        <button>Illustration</button><button>Branding</button>
                    </div>

                    <div>
                        <button className='createA' type='submit'>Login</button>
                    </div>
                </form>
            </div>
       
    </>
  )
}

export default Login
