/*import ListTodo from './comp/ListTodo';
import AddTodo from './comp/AddTodo';
import { useState } from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom'
import {store} from './comp/redux/store'
import {Provider} from 'react-redux'
function App() {
  const [jobs, setJobs] = useState([
    
  ]);

  const add=(job)=>setJobs([...jobs,job])
  return (<>  <ul className='nav'>
  <li><Link to='/add'>ADD</Link></li>
  <li><Link to='/list'>LIST</Link></li>
</ul>
    <div className="App">
     
<Provider store={store}>
      <Routes>
    <Route path='/add' element={ <AddTodo />}/>
    <Route path='/list' element={  <ListTodo />}/>
   </ Routes>
   </Provider>
    </div>
    </>
  );
}

export default App;
*/

import './App.css';
import AddTodo from './comp/AddTodo';
import ListTodo from './comp/ListTodo';

function App() {
  return (

    <div className='App'>
    <AddTodo/>

  <ListTodo/>

  </div>
  );
}

export default App;
