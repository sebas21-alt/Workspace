const express = require('express');
const router = express.Router();
const db = require('../db');
// Obtener todos los estudiantes
router.get('/', (req, res) => {
    db.query('SELECT * FROM estudiantes', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Obtener estudiante por documento
router.get('/:documento_identidad', (req, res) => {
    const doc = req.params.documento_identidad;
    db.query('SELECT * FROM estudiante WHERE documento_identidad = ?', 
        [doc], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length == 0) 
            return res.status(404).json({ mensaje:'Estudiante no encontrado'});
        res.json(results[0]);
    });
});

router.delete('/:documento_identidad' ,(req, res)=>{
    const doc = req.params.documento_identidad;
    db.query('DELETE FROM estudiantes WHERE documento_identidad = "1000123456"; = ?', 
        [doc], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length == 0) 
            return res.status(404).json({ mensaje:'Estudiante no encontrado'});
        res.json(results[0]);
    });
})

module.exports = router;