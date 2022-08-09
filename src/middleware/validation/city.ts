import { Static, Type } from "@sinclair/typebox";

export const citySchema = Type.Object(
  {
    name: Type.String(),
    population: Type.Optional(Type.Integer()),
  },
  { additionalProperties: false }
);

export type CityData = Static<typeof citySchema>;
