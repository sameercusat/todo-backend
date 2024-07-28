import express from "express";
import {
  newTask,
  all_task,
  deleteTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.post("/new", isAuthenticated, newTask);
router.get("/all_task", isAuthenticated, all_task);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
