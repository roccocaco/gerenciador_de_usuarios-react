import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [dataAPI, setDataAPI] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const req = await fetch ("https://jsonplaceholder.typicode.com/users");
      const res = await req.json();
      setDataAPI(res);
    }

    fetchAPI();
  }, []);

  return (
    <div className='App'>
      <h1>Json Placeholder</h1>
      {dataAPI.map((e) => (
        <div>
          <h2>{e.name}</h2>
          <p>{e.email}</p>
        </div>
      ))}
    </div>
  )
}


