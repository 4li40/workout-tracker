import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
const port = process.env.PORT || 8000;

// cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// auth
app.all("/api/auth/{*any}", toNodeHandler(auth));
// json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
