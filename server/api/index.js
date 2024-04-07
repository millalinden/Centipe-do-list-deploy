const app = require("./express");

const PORT = process.env.PORT || 3000;

async function main() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}....`));
}

main();
