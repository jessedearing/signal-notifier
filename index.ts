import express from "express";
import bodyParser from "body-parser";

const phoneNumber = process.env.PHONE_NUMBER;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/request", async (req, res) => {
  const formData = req.body;
  //Send form data to signal
  await fetch("http://localhost:8080/v2/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      number: phoneNumber,
      recipients: [process.env.GROUP_CHAT],
      message: `New ride request from ${formData.name} phone: ${formData.phone}`,
    }),
  });

  res.send("Request for ride sent");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  process.exit(0);
});
