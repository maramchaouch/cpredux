import { useState } from "react";
import React from "react";
import {ddtodo} from './redux/FakeSlice'
import {useDispatch} from 'react-redux'

import './AddTodo.css'
const AddTodo = () => {


    const dispatch = useDispatch()
    const [title,setTitle] = useState("")
      return (
        <div className="add">
          <input placeholder="set todo" onChange={(e)=>{setTitle (e.target.value)} }/>
          <button onClick={()=>dispatch(ddtodo(title))}>Add</button>
        </div>
      );
    };
    
    export default AddTodo;
    