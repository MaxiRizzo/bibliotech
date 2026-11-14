/**
 * @file category_controller.js
 * @brief Controlador del catálogo de categorías.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */
const categoryRepository = require('../repositories/category_repository');

/**
 * @class CategoryController
 * @brief Expone el catálogo de categorías al frontend.
 */
class CategoryController
{
    /**
     * @brief Lista todas las categorías.
     * @param {Object} req - Petición HTTP.
     * @param {Object} res - Respuesta HTTP.
     * @param {Function} next - Delega errores al global_error_middleware (nunca se responde un 500 manual).
     */
    async getAllCategories(req, res, next)
    {
        try
        {
            const categories = await categoryRepository.findAll();
            res.json(categories);
        }
        catch (error)
        {
            next(error);
        }
    }
}

module.exports = new CategoryController();