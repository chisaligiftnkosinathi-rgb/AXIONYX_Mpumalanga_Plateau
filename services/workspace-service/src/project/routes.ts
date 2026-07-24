import { Router } from 'express';

const router = Router();

// POST /project
router.post('/', async (req, res) => {
  // 1. Validate Project payload
  // 2. Create Project
  // 3. Emit WorkspaceEvent: PROJECT_CREATED
  res.status(201).json({ status: 'PROJECT_CREATED' });
});

export const projectRoutes = router;
