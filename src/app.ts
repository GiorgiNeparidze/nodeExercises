import express from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import cors from "cors"

import {
  validate,
  ValidationErrorMiddleware,
  citySchema,
  CityData,
} from "./validation";

const corsOptions = {
  origin:"http://localhost:8080"
}

const app = express();
const prisma = new PrismaClient();
app.use(express.json());
app.use(cors(corsOptions))

app.get("/all", async (request, response) => {
  const cities = await prisma.cities.findMany();
  response.json(cities);
});

app.get("/:id(\\d+)", async (req, res, next) => {
  try {
    const cityId: number = Number(req.params.id);

    const city = await prisma.cities.findUnique({ where: { id: cityId } });

    if (!city) {
      res.status(404);
      return next(`Can NOT Get City With ID: ${cityId}`);
    }

    res.json(city);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

app.post("/cities", validate({ body: citySchema }), async (req, res, next) => {
  try {
    const CityData: CityData = req.body;
    const city = await prisma.cities.create({
      data: CityData,
    });

    res.status(201).json(`Correctly added city with ID: ${city.id}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

app.patch(
  "/:id(\\d+)",
  validate({ body: citySchema }),
  async (req, res, next) => {
    try {
      const CityData: CityData = req.body;
      const { id } = req.params;
      const city = await prisma.cities.update({
        where: { id: Number(id) },
        data: CityData,
      });

      res.status(201).json(`Correctly Updated City With ID: ${city.id}`);
    } catch (error) {
      res.status(400).json(error);
      return next(error);
    }
  }
);

app.delete("/:id(\\d)", async (req, res, next) => {
  try {
    const { id } = req.params;
    const city = await prisma.cities.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(`Correctly Deleted City With ID: ${city.id}`);
  } catch (error) {
    res.status(400).json(error);
    return next(error);
  }
});

app.use(ValidationErrorMiddleware);

export default app;
