import React, { useState } from 'react';
import SimulacionFormulario from './components/SimulacionFormulario';
import SimulacionTabla from './components/SimulacionTabla';

const App = () => {
  const [data, setData] = useState([]);

  const handleSimulate = async (params) => {
    const response = await fetch('http://localhost:5000/simulate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="container">
      <h1 className="mt-4">Simulación de Estacionamiento</h1>
      <SimulacionFormulario onSimulate={handleSimulate} />
      <SimulacionTabla data={data} />
    </div>
  );
};

export default App;
