
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <>
      <h2>Users management system</h2>
      <h5>Users number: {users.length}</h5>
    </>
  )
}

export default App
