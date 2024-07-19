import React from 'react';

const SimulacionTabla = ({ data }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Nombre del Evento</th>
          <th>Tiempo Actual</th>
          <th>Random Llegada</th>
          <th>Próxima Llegada</th>
          <th>Random Fin Estacionamiento</th>
          <th>Tiempo Fin Estacionamiento</th>
          <th>Random Tamaño</th>
          <th>Tamaño Vehículo</th>
          <th>Fin de Cobro</th>
          <th>Estado de Caja</th>
          <th>Autos en Cola</th>
          <th>Lugares Disponibles</th>
          <th>Autos Pagaron</th>
          <th>Total Acumulado</th>
          <th>Estado Autos</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nombreEvento}</td>
            <td>{row.tiempoActual}</td>
            <td>{row.randomLlegada}</td>
            <td>{row.proximaLlegada}</td>
            <td>{row.randomFinEstacionamiento}</td>
            <td>{row.tiempoFinEstacionamiento}</td>
            <td>{row.randomTamano}</td>
            <td>{row.tamanoVehiculo}</td>
            <td>{row.finCobro}</td>
            <td>{row.estadoCaja}</td>
            <td>{row.autosEnCola}</td>
            <td>{row.lugaresDisponibles}</td>
            <td>{row.autosPagaron}</td>
            <td>{row.totalAcumulado}</td>
            <td>{row.estadoAutos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimulacionTabla;
