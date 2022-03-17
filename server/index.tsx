import express from "express";
import App from "../frontend/App";
import { renderToHtml } from "./lib";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.static("tmp"));

app.get("/", (req, res) => {
  const app = renderToHtml(<App greeting="Hello from the server!" />);
  res.send(app);
});

app.get("/:path", (req, res) => {
  const { path } = req.params;
  const app = renderToHtml(
    <App
      greeting="Hello from the server!"
      information={`Your path is /${path}`}
    />
  );
  res.send(app);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
