import { useState } from 'react';
import Form from './Form';
import DatiUtente from './DatiUtente';

function App() {
  // Stati per memorizzare i dati inseriti
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');

  // Funzione che riceve i dati dal form
  function gestisciSubmit(dati) {
    setNome(dati.nome);
    setCognome(dati.cognome);
    setEmail(dati.email);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Form utente</h1>
      <Form onSubmit={gestisciSubmit} />
      <DatiUtente nome={nome} cognome={cognome} email={email} />
    </div>
  );
}

export default App;