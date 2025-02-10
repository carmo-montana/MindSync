import request from "supertest";
import app from "../server.js"; // Caminho correto

describe("API MindSync - Testes de Endpoints", () => {
  test("🟢 Deve retornar status 200 na rota /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });
});
