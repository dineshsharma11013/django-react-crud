import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { updateData } from '../services/features/crudActions'
import API from '../services/API'

const Update = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        getSelected();
      }, [])

      const getSelected = async ()=>{
        try{
        const response = await API.get(`/contact/${params.id}`);
            console.log(response.data);
            setData(response.data);
            //return response.data;
        }
        catch(error)
        {
          console.log(error);
        }
      }

    const handleInput =(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    
    const updateDat = ()=>{
      //console.log(data.id);  
      dispatch(updateData(data));
    }

  return (
    <div className="container mt-3">
  
  <form>
    <div className="mb-3 mt-3">
      <label htmlFor="email">Name:</label>
      <input type="text" className="form-control" onChange={handleInput} value={data.name || ''} id="name" name="name" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Email:</label>
      <input type="text" className="form-control" onChange={handleInput} value={data.email || ''} name="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Phone:</label>
      <input type="text" className="form-control" name="phone" value={data.phone || ''} onChange={handleInput} />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd">Gender:</label>
      <input type="text" className="form-control" name="gender" value={data.gender || ''} onChange={handleInput} />
    </div>
   
    <button type="button" onClick={()=>updateDat()} className="btn btn-primary">Update</button>
    <button type="button" onClick={()=>navigate('/')} className="btn btn-info ms-1">Back</button>
  </form>
    </div>
  )
}

export default Update
