const express = require('express');
const router = express.Router();
const PacientesRoutes = require('./pacientes/pacientes');
const ExpendientesRoutes = require('./expedientes/expedientes');

router.use('/pacientes', PacientesRoutes);
router.use('/expedientes', ExpendientesRoutes);

module.exports = router;