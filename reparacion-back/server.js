const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const fondosRoutes = require('./routes/fondos');
const denunciasRoutes = require('./routes/denuncias');
const auditoriasRoutes = require('./routes/auditorias');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/fondos', fondosRoutes);
app.use('/api/denuncias', denunciasRoutes);
app.use('/api/auditorias', auditoriasRoutes);

app.listen(3000, () => console.log('Servidor en puerto 3000'));
