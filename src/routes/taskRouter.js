const { Router } = require('express');
const router = Router();
const { storeLogin } = require("../controller/taskController");

/**
 * @swagger
 * /store/login:
 *   post:
 *     summary: Armazena um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário armazenado com sucesso
 *       400:
 *         description: Erro ao armazenar usuário
 */
router.post('/store/login', storeLogin);

module.exports = router;
