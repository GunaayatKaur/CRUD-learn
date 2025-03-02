import React, { useState } from 'react'
import axios from 'axios'
import './add.css'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'

function AddP() {
  const problems = {
    pname: "",
    description: "",
    difficulty: ""
  }

  const [problem, setproblem] = useState(problems);
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const {name, value} = e.target;
    setproblem({...problem, [name] :value});
  }

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/create", problem)
    .then((response)=>{
      //console.log(response);
      toast.success(response.data.message, {position:"top-right"});
      navigate("/");
    }).catch(error => console.log(error))
  }


  return (
    <div className='addProblem'>
      <Link to ={'/'}>Back</Link>
      <h3>Add new Problems</h3>
      <form className='addPForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="pname">Problem Name</label>
          <input type="text" onChange={inputHandler} id='pname' name='pname' placeholder='Problem Name'/>
        </div>
        <div className='inputGroup'>
          <label htmlFor="description">Problem Description</label>
          <input type="text" onChange={inputHandler} id='description' name='description' placeholder='Problem Description'/>
        </div>
        <div className='inputGroup'>
          <label htmlFor="difficulty">Problem Difficulty</label>
          <input type="text" onChange={inputHandler} id='difficulty' name='difficulty' placeholder='Problem Difficulty'/>
        </div>
        <div className='inputGroup'>
          <button type='submit'>ADD PROBLEM</button>
        </div>
      </form>
    </div>
  )
};

export default AddP