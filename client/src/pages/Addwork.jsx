import React, { useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
const Addwork = () => {
  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = new Date(date).toLocaleDateString('en-US', options);
  
    const day = new Date(date).getDate();
    let daySuffix = '';
  
    if (day > 3 && day < 21) {
      daySuffix = 'th';
    } else {
      switch (day % 10) {
        case 1: daySuffix = 'st'; break;
        case 2: daySuffix = 'nd'; break;
        case 3: daySuffix = 'rd'; break;
        default: daySuffix = 'th'; break;
      }
    }
  
    return dateString.replace(/\d+/, day + daySuffix);
  }
  const [formData, setFormData] = useState({
    work: '',
    ref: '',
    description: '',
    closes: '',
    deadline: '',
    amount: ''
  });
  const {work,ref,description,closes,deadline,amount}=formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem('email');
    const username = localStorage.getItem('username');
    const formattedDeadline = formatDate(formData.deadline);

    const workData = {
      ...formData,
      email: email,
      username:username,
      deadline: formattedDeadline 

    };

    try {
      const response = await axios.post('http://localhost:3000/addwork', workData);
      console.log('Work added:', response.data);
    } catch (error) {
      console.error('There was an error adding the work!', error);
    }
  };
    let navData ={    
        name1:"Team",
        name2:"My Works"
      }
    return (
        <>
            <Nav data={navData}/>
            <div className="worker-profile add-work">


                <form onSubmit={handleSubmit} className="worker-work add-work-inner">
                    <div>
                        <h2>Work</h2>
                        <select id="works" name='work' onChange={handleChange} value={work} className='add-input' >
                            <option value="notes">Notes</option>
                            <option value="assignments">Assignments</option>
                            <option value="records">Records</option>
                            <option value="editing">Editing</option>
                            <option value="webdesign">Web Design</option>
                            <option value="ui/ux">UI/Ux</option>
                        </select>
                    </div>
                    <div>
                        <h2>References</h2>
                        <span style={{ display: 'flex', gap: 20 }}>
                            <input type="file" name='ref'/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png" width={30} alt="" />
                        </span>
                    </div>
                    <div>
                        <h2>Description</h2>
                        <textarea name="description" onChange={handleChange} value={description} style={{ height: 150, width: 600 }}  placeholder='Enter your Description about your work to know more about your work to others.' id=""></textarea>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas quam fugit vitae porro harum. Unde sequi dolor dolore distinctio saepe aliquam, autem, maxime quia quo, ea aspernatur voluptatem. Vero?</p> */}
                    </div>
                    <div style={{ display: 'flex', gap: 50 }}>
                        <span><h3>Closes : <input type="time" name='closes' onChange={handleChange} value={closes} className='add-input' /></h3></span>
                        <span><h3>DeadLine : <input type='date' name="deadline" onChange={handleChange} value={deadline} id="" /> </h3></span>
                    </div>
                    <div>
                        <h2>Amount :<input type='text' name='amount' onChange={handleChange} value={amount} className='add-input' /> /-</h2>
                        <p>Amount will be sent within 24 hrs (within One day) to your account balance</p>
                    </div>


                    <center><button type='submit' className='confirm-btn' onClick={_=>{alert("work added Successfully.")}}>ADD</button></center>
                </form>

            </div>
        </>
    )
}

export default Addwork
