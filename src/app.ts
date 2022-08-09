import express from "express";
import "express-async-errors";
import { ValidationErrorMiddleware } from "./middleware/validation";
import cityRoutes from "./routes/cities";
import { initCorsMiddleware } from "./middleware/cors";

const app = express();
app.use(express.json());
app.use("/cities", cityRoutes);
app.use(initCorsMiddleware);
app.use(ValidationErrorMiddleware);

export default app;
