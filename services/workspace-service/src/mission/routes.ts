import { Router } from 'express';

const router = Router();

// POST /mission
router.post('/', async (req, res) => {
  // 1. Validate Mission payload via Zod contracts
  // 2. Insert Mission into Database
  // 3. Emit WorkspaceEvent: MISSION_SELECTED
  res.status(201).json({ status: 'MISSION_SELECTED' });
});

export const missionRoutes = router;
