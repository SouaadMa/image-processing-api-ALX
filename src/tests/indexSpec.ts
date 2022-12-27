import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("GET /api", () => {
  it("should return a 200 response", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
