import { Router } from 'express';
import taskRoutes from '../api/tasks/routes/task.routes';

const router: Router = Router();

router.use('/tasks', taskRoutes);

export default router;
