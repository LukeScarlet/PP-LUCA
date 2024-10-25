const { Router } = require('express');
const router = Router();
const { getDados } = require("../controller/dadosController");

/**
 * @swagger
 * /dados:
 *   get:
 *     summary: Retorna dados
 *     responses:
 *       200:
 *         description: Dados retornados com sucesso
 *       400:
 *         description: Erro ao buscar dados
 */
router.get('/dados', getDados);

module.exports = router;
