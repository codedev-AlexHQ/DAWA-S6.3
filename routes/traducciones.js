const express = require('express');
const router = express.Router();
const { Traduccion } = require('../models');

router.get(['/', '/listar'], async (req, res) => {
  const lista = await Traduccion.findAll();
  res.render('index', { lista });
});

router.get('/agregar', (req, res) => {
  res.render('agregar');
});
router.post('/agregar', async (req, res) => {
  await Traduccion.create(req.body);
  res.redirect('/listar');
});

router.get('/editar/:id', async (req, res) => {
  const t = await Traduccion.findByPk(req.params.id);
  res.render('editar', { t });
});
router.post('/editar/:id', async (req, res) => {
  await Traduccion.update(req.body, { where: { id: req.params.id } });
  res.redirect('/listar');
});

router.get('/eliminar/:id', async (req, res) => {
  await Traduccion.destroy({ where: { id: req.params.id } });
  res.redirect('/listar');
});

module.exports = router;
