const { Router } = require("express");
const adminRouter = Router();
const {
  createAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
} = require("../Admin/Admin.cintroller");
const { AdminValidation } = require("../Admin/Admin.valideion.Schema")

const ValidateSchema = (schema) => (req, res, next) => {
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res.status(400).send(validationResult.error.details[0].message);
  }
  next();
};


/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: API endpoints for managing admins
 */

/**
 * @swagger
 * /adminRouter/createAdmin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     description: Create a new admin with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *                name:
 *                  type: string
 *                login:
 *                  type: string
 *                hashed_password:
 *                  type: string
 *                is_active:
 *                  type: boolean
 *                is_creator:
 *                  type: boolean
 *     responses:
 *       "201":
 *         description: Admin created successfully
 *       "500":
 *         description: Internal server error
 */
adminRouter.post("/createAdmin", ValidateSchema(AdminValidation), createAdmin);

/**
 * @swagger
 * /adminRouter/getAdmin:
 *   get:
 *     summary: Get all admins
 *     tags: [Admin]
 *     description: Retrieve a list of all admins
 *     responses:
 *       "200":
 *         description: A successful response with a list of admins
 *       "500":
 *         description: Internal server error
 */
adminRouter.get("/getAdmin", getAdmin);

/**
 * @swagger
 * /adminRouter/getAdmin/{id}:
 *   get:
 *     summary: Get an admin by ID
 *     tags: [Admin]
 *     description: Retrieve an admin by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the admin to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       "200":
 *         description: A successful response with the admin details
 *       "404":
 *         description: Admin not found
 *       "500":
 *         description: Internal server error
 */
adminRouter.get("/getAdmin/:id", getAdminById);

/**
 * @swagger
 * /adminRouter/updateAdmin/{id}:
 *   put:
 *     summary: Update an admin by ID
 *     tags: [Admin]
 *     description: Update an admin with the provided ID and details
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the admin to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                name:
 *                  type: string
 *                login:
 *                  type: string
 *                hashed_password:
 *                  type: string
 *                is_active:
 *                  type: boolean
 *                is_creator:
 *                  type: boolean
 *     responses:
 *       "200":
 *         description: Admin updated successfully
 *       "404":
 *         description: Admin not found
 *       "500":
 *         description: Internal server error
 */
adminRouter.put("/updateAdmin/:id", updateAdmin);

module.exports = { adminRouter };
