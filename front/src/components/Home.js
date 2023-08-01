import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { submitData } from '../services/features/crudActions'

const Home = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch();

    const handleInput =(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
      saveData()
    },[])

    const saveData = ()=>{
        console.log(data)
        dispatch(submitData())
    }

  return (
   <div className="container mt-3">
  
  <form >
    <div className="mb-3 mt-3">
      <label htmlFor="email">Name:</label>
      <input type="text" className="form-control" onChange={handleInput}  id="name" name="name" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Email:</label>
      <input type="text" className="form-control" onChange={handleInput} name="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Phone:</label>
      <input type="text" className="form-control" name="phone" onChange={handleInput} />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Gender:</label>
      <input type="text" className="form-control" name="gender" onChange={handleInput} />
    </div>
   
    <button type="button" onClick={()=>saveData()} className="btn btn-primary">Submit</button>
  </form>
</div>

  )
}

export default Home
