import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/hello", (_req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
