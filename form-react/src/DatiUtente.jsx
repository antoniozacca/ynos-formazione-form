function DatiUtente({ nome, cognome, email }) {
  return (
    <div className="mt-4">
      <h2>Dati inseriti:</h2>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Cognome:</strong> {cognome}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default DatiUtente;