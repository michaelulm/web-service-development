const app = require("./app/app.js");

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is up and listening on http://localhost:${PORT}`);
});
