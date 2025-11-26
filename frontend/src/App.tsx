import { useState, useEffect } from 'react'
import './App.css'
import { env, getApiUrl } from './config/env'

interface ApiResponse {
  message: string;
  timestamp?: string;
}

function App() {
  const [healthStatus, setHealthStatus] = useState<string>('');
  const [helloMessage, setHelloMessage] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  useEffect(() => {
    // Check health endpoint
    fetch(getApiUrl('health'))
      .then(res => res.json())
      .then(data => setHealthStatus(data.status))
      .catch(() => setHealthStatus('error'));

    // Get hello message
    fetch(getApiUrl('hello'))
      .then(res => res.json())
      .then((data: ApiResponse) => setHelloMessage(data.message))
      .catch(() => setHelloMessage('Failed to fetch'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(getApiUrl('data'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: inputValue }),
      });
      const data: ApiResponse = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse('Error sending data');
    }
  };

  return (
    <div className="app">
      <h1>{env.VITE_APP_TITLE}</h1>
      <div className="card">
        <h2>Backend Status</h2>
        <p>Health: <span className={healthStatus === 'ok' ? 'success' : 'error'}>{healthStatus}</span></p>
        <p>Message: {helloMessage}</p>
      </div>
      
      <div className="card">
        <h2>Test API</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Send</button>
        </form>
        {response && <p className="response">Response: {response}</p>}
      </div>
    </div>
  )
}

export default App

