import express from "express";

import { 
    getServiceType ,
    getAllServices,
    getService,
    addComment,
    comentario
} 
from "../controllers/interactionController";
const router = express.Router();

router.get("/type/:command",getServiceType);
router.get("/services",getAllServices);
router.get("/servicio/:command",getService);
router.post("/comentario",addComment)
router.get("/comentarios/:command",comentario)
export { router as interactionRouter };
