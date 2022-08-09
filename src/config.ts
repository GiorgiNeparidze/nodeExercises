const missingSetting = "Warning: No value set for this .env VARR";

const config = {
  "PORT": process.env.PORT || missingSetting,
};

export default config;
