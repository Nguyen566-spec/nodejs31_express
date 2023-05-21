import express from "express";
import cors from "cors";
import rootRouter from "./router/rootRouter.js";

const app = express();

app.listen(8080);

app.use(express.json());

app.use(express.static("."));

app.use(cors());

app.use("/api", rootRouter);

// const swaggerUi = require('swagger-ui-express');
// const swaggerJsDoc = require('swagger-jsdoc');

// const options = {
//     definition: {
//         info: {
//             title: "api",
//             version: "1.0.0"
//         }
//     },
//     apis: ["src/swagger/index.js"]
// }

// const specs = swaggerJsDoc(options);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

/**
 * @swagger
 * /api/v1/user/getUser:
 *  get:
 *      description: responses
 *      tags: [User]
 *      responses:
 *          200: 
 *              description: success   
 */

/**
 * @swagger
 * /api/v1/user/updateUser/{id}:
 *  put:
 *      description: responses
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: user
 *        schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *             firstName:
 *               type: string
 *             lastName:
 *               type: string
 *      responses:
 *          200: 
 *              description: res   
 */
