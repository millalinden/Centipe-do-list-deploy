// const express = require("express");
// const { setupRouting } = require("./express");

// const PORT = process.env.PORT || 3000;

// async function main() {
//   const app = express();

//   // Instead of setupRouting being a property of an object, it's now a function directly exported.
//   setupRouting(app);

//   app.listen(PORT, () => console.log(`Listening on port ${PORT}....`));
// }

// main();


const app = require("./express");

const PORT = process.env.PORT || 3000;

async function main() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}....`));
}

main();
