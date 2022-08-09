import supertest from "supertest"

import app from "../app";

const request = supertest(app);


test('GET /planets/all', async () => { 
  const response = await request
    .get("/andiamo")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body)
})