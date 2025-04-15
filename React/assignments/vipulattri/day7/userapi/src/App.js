import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState(null);

  function onchange() {
    setCounter(prev => Number(prev) + 1);
  }

  function decre() {
    if (counter > 1) setCounter(prev => Number(prev) - 1);
  }

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${counter}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setUser(data.data);
        } else {
          setUser(null);
        }
      });
  }, [counter]);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4 text-primary">User Api assignment</h1>

      <input
        type="number"
        className="form-control mb-3 w-50 mx-auto shadow-sm border-primary"
        value={counter}
        onChange={(e) => {
          setCounter(e.target.value);
        }}
        placeholder="Enter user ID"
      />

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-success shadow-sm" onClick={onchange}>Increase</button>
        <button className="btn btn-danger shadow-sm" onClick={decre}>Decrease</button>
      </div>

      {user ? (
        <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '400px' }}>
          <img src={user.avatar} className="card-img-top rounded-circle border border-primary p-1" alt="User Avatar" />
          <div className="card-body">
            <h5 className="card-title text-info">{user.first_name} {user.last_name}</h5>
            <p className="card-text">📧 <strong>{user.email}</strong></p>
          </div>
        </div>
      ) : (
        <p className="text-danger">No user found</p>
      )}
    </div>
  );
}

export default App;
