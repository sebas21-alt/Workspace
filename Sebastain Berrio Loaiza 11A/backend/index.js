const express = require('express');
const cors = require('cors');

// Por cada tabla
const estudiantesRoutes = require('./routes/estudiantes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Por cada tabla
app.use('/api/estudiantes', estudiantesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
