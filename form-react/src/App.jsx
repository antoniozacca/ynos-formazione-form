import { useState } from 'react'
import './App.css'
import Form from './Form';
import DisplayData from './DisplayData';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Form Utente</h1>
      <Form onSubmit={handleFormSubmit} />
      {formData && <DisplayData data={formData} />}
    </div>
  );
}


export default App
