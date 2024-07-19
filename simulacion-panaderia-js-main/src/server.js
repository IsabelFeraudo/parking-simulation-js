const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/simulate', (req, res) => {
  const { filas, desde, hasta } = req.body;
  const datosSimulacion = new TrabajoPractico().comenzarEjecucion(filas, desde, hasta);
  res.json(datosSimulacion);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
