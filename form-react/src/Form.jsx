import { useState } from 'react';

function Form({ onSubmit }) {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 

    // Passiamo i dati al genitore (App)
    onSubmit({
      nome: nome,
      cognome: cognome,
      email: email
    });

    // Puliamo i campi dopo il submit
    setNome('');
    setCognome('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Cognome"
        value={cognome}
        onChange={(e) => setCognome(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary">
        Invia
      </button>
    </form>
  );
}

export default Form;