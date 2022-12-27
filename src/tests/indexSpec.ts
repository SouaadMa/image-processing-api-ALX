import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("GET /api", () => {
  it("should return a 200 response", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});

describe("GET /images", () => {
  it("should return a 500 response", async () => {
    const response = await request.get(
      "/images?fileName=fjord&width=100&height=100"
    );
    expect(response.status).toBe(500); 
  });
});
