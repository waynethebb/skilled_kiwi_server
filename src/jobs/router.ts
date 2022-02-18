import * as express from 'express';
import { isAuth } from './../common/middleware/auth';
import * as jobsController from './controller';

const router = express.Router();

// GET /jobs
// GET /jobs?username=:username
router.get('/', jobsController.getJobs);

// GET /jobs/:id
router.get('/:id', jobsController.getJobs);

// POST /jobs
router.post('/', isAuth, jobsController.createJob);

// PUT /jobs/:id
router.put('/:id', jobsController.updateJob);

// DELETE /jobs/:id
router.delete('/:id', jobsController.deleteJob);

export default router;
