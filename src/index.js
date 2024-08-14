import express from "express";
import router from "./routes/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(router);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
