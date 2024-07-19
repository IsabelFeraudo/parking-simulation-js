import React, { useState } from 'react';

const SimulacionFormulario = ({ onSimulate }) => {
  const [filas, setFilas] = useState('');
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSimulate({ filas, desde, hasta });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-group">
        <label>Cantidad de filas a simular</label>
        <input
          type="number"
          className="form-control"
          value={filas}
          onChange={(e) => setFilas(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fila a mostrar desde</label>
        <input
          type="number"
          className="form-control"
          value={desde}
          onChange={(e) => setDesde(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fila a mostrar hasta</label>
        <input
          type="number"
          className="form-control"
          value={hasta}
          onChange={(e) => setHasta(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Simular</button>
    </form>
  );
};

export default SimulacionFormulario;
