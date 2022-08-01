-- CreateTable
CREATE TABLE "Cityes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "population" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cityes_pkey" PRIMARY KEY ("id")
);
