import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { editData, updateData } from '../services/features/crudActions'

const Update = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch();
    const params = useParams()
    
    const state = useSelector((state)=>{
      return state.app;
    });

    useEffect(()=>{
        console.log(params.id)
        dispatch(editData(params.id));
    }, [])

    const handleInput =(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    
    const updateDat = ()=>{
        //dispatch()
    }

  return (
    <div className="container mt-3">
  
  <form >
    <input type='text' name='id' value={params.id} />
    <div className="mb-3 mt-3">
      <label htmlFor="email">Name:</label>
      <input type="text" className="form-control" onChange={handleInput} value={state.selectedUser.name || ''} id="name" name="name" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Email:</label>
      <input type="text" className="form-control" onChange={handleInput} value={state.selectedUser.email || ''} name="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Phone:</label>
      <input type="text" className="form-control" name="phone" value={state.selectedUser.phone || ''} onChange={handleInput} />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Gender:</label>
      <input type="text" className="form-control" name="gender" value={state.selectedUser.gender || ''} onChange={handleInput} />
    </div>
   
    <button type="button" onClick={()=>updateDat()} className="btn btn-primary">Update</button>
  </form>
    </div>
  )
}

export default Update
