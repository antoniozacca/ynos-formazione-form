function DisplayData({ data }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Dati Inseriti:</h2>
      <p><strong>Nome:</strong> {data.nome}</p>
      <p><strong>Cognome:</strong> {data.cognome}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}

export default DisplayData;