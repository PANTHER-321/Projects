import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      setMessage(data.message);
      setName('');
      setEmail('');
    } catch (err) {
      setMessage(' Error sending data');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)}
        /><br /><br />
        <input
          type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

export default App;
