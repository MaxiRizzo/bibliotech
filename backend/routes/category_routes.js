/**
 * @file category_routes.js
 * @brief Rutas de la API para el catálogo de categorías.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */
const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category_controller');
const { verifyToken } = require('../middleware/auth_middleware');

/**
 * @route GET /api/categories
 * @brief Obtener todas las categorías.
 * @note Ruta protegida: solo se consume desde el dashboard del cliente, que ya exige sesión.
 */
router.get('/', verifyToken, categoryController.getAllCategories);

module.exports = router;