import supertest from "supertest";
import app from "../src/index.js";
import mongoose from "mongoose";

const request = supertest(app);

describe("Pet API Tests", () => {
  let petId;

  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close();
    done();
  });

  it("should create a new pet", async () => {
    const response = await request.post("/api/pets").send({
      name: "Fluffy",
      species: "Cat",
      age: 3,
      owner: "Alice",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    petId = response.body._id;
  });

  it("should get all pets", async () => {
    const response = await request.get("/api/pets");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should get a pet by id", async () => {
    const response = await request.get(`/api/pets/${petId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", petId);
  });

  it("should update a pet", async () => {
    const response = await request.put(`/api/pets/${petId}`).send({
      name: "Whiskers",
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", petId);
    expect(response.body).toHaveProperty("name", "Whiskers");
  });

  it("should delete a pet", async () => {
    const response = await request.delete(`/api/pets/${petId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("_id", petId);
  });

  it("should handle not found for getting a deleted pet", async () => {
    const response = await request.get(`/api/pets/${petId}`);
    expect(response.status).toBe(404);
  });
});
