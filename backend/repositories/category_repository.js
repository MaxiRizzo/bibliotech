/**
 * @file category_repository.js
 * @brief Repositorio para el acceso a datos de categorías.
 * @project Bibliotech
 * @author Tecnologías Informáticas B - Facultad de Ingeniería - UNMdP
 * @license http://www.gnu.org/licenses/gpl.txt GNU GPL 3.0
 * @date Octubre 2026
 */
const db = require('../config/db');

/**
 * @class CategoryRepository
 * @brief Encapsula las llamadas a Stored Procedures del catálogo de categorías.
 */
class CategoryRepository
{
    /**
     * @brief Obtiene el catálogo completo de categorías.
     * @returns {Promise<Array>} Array de { id, name }.
     * @note Acceso paramétrico vía Stored Procedure; no hay consultas inline (previene SQL Injection).
     */
    async findAll()
    {
        const [rows] = await db.execute('CALL sp_get_all_categories()');
        return rows[0];
    }
}

module.exports = new CategoryRepository();