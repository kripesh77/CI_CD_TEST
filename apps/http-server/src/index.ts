import express from "express";
import { prisma } from "@repo/db";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "hi" });
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    res.json({ message: "signup successful", user });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});

app.listen(8000, () => {
  console.log("server running on port 8000");
});
