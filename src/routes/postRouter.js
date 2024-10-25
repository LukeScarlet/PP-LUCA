const { Router } = require('express');
const upload = require('../config/multer');
const router = Router();
const { storePost } = require("../controller/postController");

/**
 * @swagger
 * /store/post:
 *   post:
 *     summary: Armazena um post
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               mensagem:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Post armazenado com sucesso
 *       400:
 *         description: Erro ao armazenar post
 */
router.post('/store/post', upload.single('file'), storePost);

module.exports = router;
