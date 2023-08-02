import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getData, insertData, removeData } from '../services/features/crudActions'
import {Link} from 'react-router-dom'

const Home = () => {
  const [open, setOpen] = useState(false);  
  const [data, setData] = useState({})
    const dispatch = useDispatch();

    const state = useSelector((state)=>{
      return state.app;
    });


    const handleInput =(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
      dispatch(getData());
     // console.log(state.users)
    },[])

   
    const saveData = ()=>{
        console.log(data)
        dispatch(insertData(data))
        setData({})
        setOpen(true);
        dispatch(getData());
        setTimeout(() => {
          setOpen(false);
          
        }, 3000);
        
    }

    const deleteData = (id)=>{
      console.log(id)
      dispatch(removeData(id))
      setOpen(true);
        setTimeout(() => {
          setOpen(false);
          dispatch(getData());
        }, 3000);
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
      <select className="form-select" name="gender" onChange={handleInput}>
      <option>Please Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
     
    </div>
   
    <button type="button" onClick={()=>saveData()} className="btn btn-primary">Submit</button>
  </form>
{open ? 
(<div>
{state.msg} 
</div>)
: '' }  
  

  <p>Total {state.users.length}</p>

  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
{
  state.users.map((item, index)=>{
    return (
  
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
      <Link className="btn btn-primary btn-sm" to={'/update/'+item.id}>Edit</Link>
      <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteData(item.id)} >Delete</button>
      </td>
    </tr>
    )
  })
}
</tbody>
</table>  

</div>

  )
}

export default Home
