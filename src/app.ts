import express from "express";
import "express-async-errors";
import {PrismaClient} from "@prisma/client"

const app = express();
const prisma = new PrismaClient()

app.get("/all", async (request, response) => {
  const cities = await prisma.cities.findMany()
  response.json(cities)
});

export default app;