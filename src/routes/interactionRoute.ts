import express from "express";
import { pool } from "../controllers/db";
import { getAllInteractions } from "../controllers/interactionController";
const router = express.Router();

router.get("/",getAllInteractions);

export { router as interactionRouter };
