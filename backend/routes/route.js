import express from 'express';
import { create, deleteProblem, getAll, getOneProblem, update } from '../controller/prob-controller.js';

const router = express.Router();

router.post("/create", create);
router.get("/AllProblems", getAll);
router.get("/Problem/:id", getOneProblem);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteProblem);
export default router;