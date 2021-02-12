import { Router } from 'express';
import { testTask } from '../controllers/task.controller';
import { schemaValidation } from '../middlewares';
import { createTaskSchema, updateTaskSchema } from '../schema/task.schema';

const router: Router = Router();
//ruta de prueba para verificacion de roles y de autenticacion
router.get('/test', testTask);

export default router;
