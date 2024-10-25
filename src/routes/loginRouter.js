const { Router } = require('express');
const router = Router();
const { loginPost } = require("../controller/loginController");

/**
 * @swagger
 * /store/login:
 *   post:
 *     summary: Realiza login
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
 *         description: Login realizado com sucesso
 *       400:
 *         description: Erro ao realizar login
 */
router.post('/store/login', loginPost);

module.exports = router;
