import express from "express";
import { getAllInteractions } from "../controllers/interactionController";
const router = express.Router();

router.get("/",getAllInteractions);

export { router as interactionRouter };
