// src/controllers/petController.js
import Pet from "../model/Pet.js";

const PetController = {
  createPet: async (req, res) => {
    try {
      const pet = new Pet(req.body);
      const savedPet = await pet.save();
      res.status(201).json(savedPet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllPets: async (req, res) => {
    try {
      const pets = await Pet.find();
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPetById: async (req, res) => {
    try {
      const pet = await Pet.findById(req.params.petId);
      if (!pet) {
        return res.status(404).json({ message: "Pet not found" });
      }
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePet: async (req, res) => {
    try {
      const updatedPet = await Pet.findByIdAndUpdate(
        req.params.petId,
        req.body,
        { new: true }
      );
      if (!updatedPet) {
        return res.status(404).json({ message: "Pet not found" });
      }
      res.status(200).json(updatedPet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePet: async (req, res) => {
    try {
      const deletedPet = await Pet.findByIdAndDelete(req.params.petId);
      if (!deletedPet) {
        return res.status(404).json({ message: "Pet not found" });
      }
      res.status(200).json(deletedPet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default PetController;
