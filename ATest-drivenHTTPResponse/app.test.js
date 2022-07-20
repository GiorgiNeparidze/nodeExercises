const supertest = require("supertest");

const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

  expect(response.body).toBe("<html><body><h1>Stavo Preparando Per Un Eservcizio Pesante</h1></body></html>");
});
