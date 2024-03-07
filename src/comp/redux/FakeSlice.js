import { createSlice } from '@reduxjs/toolkit'

export const FakeSlice = createSlice({
  name: 'fake',
  initialState: 
   [{title:'t1',id:1,isDone:false},{title:'t2',id:2,isDone:false}]
  ,
  reducers: {

    ddtodo : (state , actions) => {
      const newtask = {
        title : actions.payload,
        id :7,
        isDone : false
      };
      state.push(newtask);
    },

    deletetodo : (state,actions)=>{

      const sts = state.filter((t)=>t.id !== actions.payload);
      return (sts)
    },
    edittodo : (state,actions)=>{

      const sts = state.filter((t)=>t.id !== actions.payload);
      return (sts)
    },

    



    }


  
    })
       
     

export const {ddtodo , deletetodo , edittodo} = FakeSlice.actions;

export default FakeSlice.reducer;
