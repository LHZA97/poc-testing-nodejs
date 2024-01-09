// src/routes/petRoutes.js
import express from "express";
import PetController from "../controllers/petController.mjs";

const router = express.Router();

// CRUD operations
router.post("/", PetController.createPet);
router.get("/", PetController.getAllPets);
router.get("/:petId", PetController.getPetById);
router.put("/:petId", PetController.updatePet);
router.delete("/:petId", PetController.deletePet);

export default router;
