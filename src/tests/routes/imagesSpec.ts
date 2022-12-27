import supertest from "supertest";
import app from "../../index";

const request = supertest(app);

describe("GET /images", () => {
  it("should return a 500 response when all is well", async () => {
    const response = await request.get(
      "/images?fileName=fjord&width=100&height=100"
    );
    expect(response.status).toBe(500);
  });

  it("should return a 400 response when type of params is wrong", async () => {
    const response = await request.get(
      "/images?fileName=fjord&width=s&height=100"
    );
    expect(response.status).toBe(400);
  });

  it("should return a 404 response when original image does not exist", async () => {
    const response = await request.get(
      "/images?fileName=notfound&width=100&height=100"
    );
    expect(response.status).toBe(404);
  });
});
