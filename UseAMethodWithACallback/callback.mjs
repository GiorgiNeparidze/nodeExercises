import { writeFile } from "node:fs";

writeFile(
  "message.txt",
  "I Just Wrote This Text Using the Node.js core fs.writeFile() (callback API) Method!",
  "utf8",
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);
