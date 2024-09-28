import React, { useEffect, useState } from 'react'
import SignUpComp from '../components/SignUpComp'
import axios from 'axios';
const SignUp = () => {
   
        
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
                <SignUpComp/>
            </div>
        </>
    )
}

export default SignUp
