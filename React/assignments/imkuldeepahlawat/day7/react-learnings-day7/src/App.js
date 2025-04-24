import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ChildA from './components/ChildA';

function App() {
  const [userDetailState, setUserDetail] = useState({
    name: 'Kuldeep Ahlawat',
    work: 'Engineering'
  })

function handleChangeUser(updatedState){
  setUserDetail(updatedState)
}

  return (
    <div className="App">
      <h1>
        App.js
      </h1>
      <ChildA userDetails={userDetailState} handleChange={handleChangeUser}/>
    </div>
  );
}

export default App;
